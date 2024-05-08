import React from "react";
import css from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <div>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        margin="auto"
        color="var(--primary)"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
