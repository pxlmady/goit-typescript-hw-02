import React from "react";
import css from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className={css.loaderContainer}>
      <ThreeDots
        height={80}
        width={80}
        color="var(--primary)"
        radius={9}
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
