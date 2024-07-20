import React, { useState } from "react";

const DropArea = ({ onDrop, extra }) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      className={`transition-all ${extra} duration-300 ${
        showDrop
          ? "h-[200px]  border-dotted my-5 border-0 rounded-md bg-purple-100"
          : "position-absolute"
      }`}
    ></div>
  );
};

export default DropArea;
