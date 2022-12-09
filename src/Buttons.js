import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { handlePage, page, nbPages, isLoading } = useGlobalContext();
  return (
    <div className="btn-container">
      <button
        disabled={isLoading}
        type="button"
        onClick={() => {
          handlePage("decrease");
        }}
      >
        decrease
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button
        disabled={isLoading}
        type="button"
        onClick={() => {
          handlePage("increase");
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default Buttons;
