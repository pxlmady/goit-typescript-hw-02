import React from "react";
import css from "./LoadMoreButton.module.css";

interface Props {
  handleClick: () => void;
}

const LoadMoreButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <div>
      <button
        className={css.loadMoreButton}
        type="button"
        onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreButton;
