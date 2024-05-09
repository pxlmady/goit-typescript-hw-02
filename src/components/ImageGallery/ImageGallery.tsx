import React from "react";
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

interface Photo {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
}

interface Props {
  photos: Photo[];
  handleImageClick: (photo: Photo) => void;
}

const ImageGallery: React.FC<Props> = ({ photos, handleImageClick }) => {
  return (
    <ul className={css.photoContainer}>
      {photos.map((photo) => {
        return (
          <li key={photo.id}>
            <ImageCard photo={photo} handleImageClick={handleImageClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
