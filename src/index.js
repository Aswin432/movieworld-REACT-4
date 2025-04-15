import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Star rating with messages for 5 stars */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />

    {/* Plain 10-star rating without messages */}
    <StarRating maxRating={10} />

    {/* Default selected rating */}
    <StarRating size={24} color="red" defaultRating={3} />

    {/* Test component with movie rating */}
    <Test />
  </React.StrictMode>
);
