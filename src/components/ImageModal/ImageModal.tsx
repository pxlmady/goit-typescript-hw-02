import React from "react";
import css from "./ImageModal.module.css";
import ReactModal from "react-modal";

interface Props {
  isOpen: boolean;
  handleCloseModal: () => void;
  selectedPhoto: {
    urls: {
      regular: string;
    };
    alt_description: string;
  };
}

const ImageModal: React.FC<Props> = ({
  isOpen,
  handleCloseModal,
  selectedPhoto,
}) => {
  return (
    <div>
      <ReactModal isOpen={isOpen} onRequestClose={handleCloseModal}>
        <div className={css.imageModalContainer}>
          <img
            className={css.imageModal}
            src={selectedPhoto.urls.regular}
            alt={selectedPhoto.alt_description}
          />
          <p className={css.imageDescription}>
            {selectedPhoto.alt_description.toUpperCase()}
          </p>

          <button className={css.closeModalButton} onClick={handleCloseModal}>
            Close Modal
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default ImageModal;
