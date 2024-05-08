import React from "react";
import css from "./ImageCard.module.css";

interface Props {
  photo: {
    urls: {
      small: string;
    };
    alt_description: string;
  };
  handleImageClick: (photo: any) => void;
}

const ImageCard: React.FC<Props> = ({ photo, handleImageClick }) => {
  const handleClick = () => {
    handleImageClick(photo);
  };
  return (
    <div>
      <img
        className={css.photoCard}
        src={photo.urls.small}
        alt={photo.alt_description}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
