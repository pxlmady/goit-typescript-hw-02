import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import { requestImageGallery } from "../../services/HTTPRequest";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import ReactModal from "react-modal";

function App() {
  const [query, setQuery] = useState<string>("");
  const [photos, setPhotos] = useState<null | any[]>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPageNumber, setTotalPageNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);
  ReactModal.setAppElement("#root");
  const onSetQuery = (queryWord: string) => {
    setQuery(queryWord);
    setPageNumber(1);
    setTotalPageNumber(0);
    setPhotos(null);
  };
  const onSetPageNumber = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };
  useEffect(() => {
    if (query.length === 0) return;
    async function fetchPhotoGallery() {
      try {
        setIsLoading(true);
        const data = await requestImageGallery(query, pageNumber);

        setTotalPageNumber(data.total_pages);
        if (data.results && data.results.length > 0) {
          setPhotos((prevPhotos) => {
            if (!Array.isArray(prevPhotos)) {
              return data.results;
            }
            return [...prevPhotos, ...data.results];
          });
        } else {
          toast.error("Something went wrong... Try again", {
            style: {
              border: "1px solid var(--primary)",
              padding: "16px",
              color: "var(--primary)",
            },
            iconTheme: {
              primary: "var(--primary)",
              secondary: "#FFFAEE",
            },
          });
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPhotoGallery();
  }, [query, pageNumber]);
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  const handleImageClick = (photo: any) => {
    setSelectedPhoto(photo);
    setModalIsOpen(true);
  };
  return (
    <>
      <div className="container">
        <Toaster position="top-center" reverseOrder={true} />
        <SearchBar onSetQuery={onSetQuery} />
        {isError && <ErrorMessage />}
        {Array.isArray(photos) && (
          <ImageGallery photos={photos} handleImageClick={handleImageClick} />
        )}
        {selectedPhoto && (
          <ImageModal
            isOpen={modalIsOpen}
            handleCloseModal={handleCloseModal}
            selectedPhoto={selectedPhoto}
          />
        )}
        {isLoading && <Loader />}
        {totalPageNumber - pageNumber >= 1 && (
          <LoadMoreButton handleClick={onSetPageNumber} />
        )}
      </div>
    </>
  );
}

export default App;
