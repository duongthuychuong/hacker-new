import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading } = useGlobalContext();
  console.log(isLoading);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return <h2>stories component</h2>;
};

export default Stories;
