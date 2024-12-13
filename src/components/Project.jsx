import { useState } from "react";
import W1 from "../assets/W1.jpg";
import W2 from "../assets/W2.jpg";
import W3 from "../assets/W3.jpg";
import W4 from "../assets/W4.jpg";
import W5 from "../assets/W5.jpg";
import W6 from "../assets/W6.jpg";
import W7 from "../assets/W7.jpg";
import W8 from "../assets/W8.jpg";
import W9 from "../assets/W9.jpg";

const Project = () => {
  // Sample photo URLs (you can replace these with your actual photo URLs)
  const photos = [W1, W2, W3, W4, W5, W6, W7, W8, W9];

  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <>
      <div className="photo-gallery w-[390px] lg:w-[1200px] mx-auto mt-[50px]">
        <h2 className="text-2xl font-bold mb-2 text-center">Project Gallery</h2>
        <div className="ml-[25px] lg:ml-0 lg:w-[1200px] mx-auto grid lg:grid-cols-3 gap-4 lg:gap-y-[50px] mt-[50px]">
          {photos.slice(0, showAll ? photos.length : 6).map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-[360px] h-[240px] rounded-md bg-cover object-contain border-[1px] border-blue-100 p-2 hover:rotate-1 "
            />
          ))}
        </div>
        <button
          onClick={handleToggle}
          className="mt-8 btn btn-primary text-white px-4 py-2 rounded flex mx-auto"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </>
  );
};

export default Project;
