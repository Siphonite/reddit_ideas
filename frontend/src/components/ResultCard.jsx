import React from "react";
import "./ResultCard.css";

function ResultCard({ result }) {
  return (
    <div className="result-card">

      {/* Title FIRST */}
      <div className="result-row">
        <strong>Title</strong>
        <p>{result.title}</p>
      </div>

      {/* Body SECOND */}
      <div className="result-row">
        <strong>Body</strong>
        <p>{result.body}</p>
      </div>

      {/* Ideas THIRD */}
      <div className="result-row">
        <strong>Startup Ideas</strong>
        <p style={{ whiteSpace: "pre-wrap" }}>
          {result.ideas}
        </p>
      </div>

    </div>
  );
}

export default ResultCard;
