import React from "react";

function PdfReader() {
  const handleButtonClick = () => {
    window.open(
      "https://www.canva.com/design/DAFomPvrkq8/mXJUNd1s2qPn0wdRAWvfnA/view",
      "_blank"
    );
  };

  return (
    <div className="pdf">
      <button className="btn btn-primary mt-4" onClick={handleButtonClick}>
        View PDF
      </button>
    </div>
  );
}

export default PdfReader;
