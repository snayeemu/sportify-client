import { gallery } from "../../../utilities/utilities.js";

const Gallery = () => {
  return (
    <div>
      <h2 className="text-4xl m-5 xl:ms-0">Some Events</h2>
      <div className="mx-4 lg:mx-0 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {gallery.map((col, index1) => (
          <div key={`gallery-image-${index1}`} className="flex flex-col gap-4">
            {col.map((img, index2) => (
              <div key={`${index1}-of-${index2}`} className="overflow-hidden">
                <img
                  src={img}
                  alt={`${index1}-of-${index2}`}
                  className="hover:scale-125 duration-300 "
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
