import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div className="flex flex-1 items-center justify-center bg-black-10/50">
      <CircularProgress />
    </div>
  );
};

export default Loading;
