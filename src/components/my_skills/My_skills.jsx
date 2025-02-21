import adove_illustrator_image from "../../assets/images/adove-illustrator.png";
import express_js_image from "../../assets/images/express_js.png";
import node_js_image from "../../assets/images/node_js.png";
import react_js_image from "../../assets/images/react_js.png";
import tailwin_css_images from "../../assets/images/tailwind_css.png";
import wordpress_image from "../../assets/images/wordpress.png";
import mongodb_image from "../../assets/images/mongo_db.png";
import "./My_skills.css"

const AutoImageSlider = () => {
  // List of images to display
  const images = [
    adove_illustrator_image,
    express_js_image,
    node_js_image,
    react_js_image,
    tailwin_css_images,
    wordpress_image,
    mongodb_image,
  ];

  // Duplicating images to create the infinite loop effect
  const duplicateImages = [...images, ...images];

  return (
    <div
      className="slider-container bg-black"
      style={{
        position: "relative",
        width: "100%", // Full width of the screen
        height: "200px", // Adjusted height for the slider
        overflow: "hidden",
      }}
    >

        <h1 className="text-center text-3xl text-white mt-10 mb-10 font-bold">My Skills 😎</h1>
      <div
        style={{
          display: "flex",
          animation: "slide 20s linear infinite mb-10", // Continuous animation
        }}
      >
        {duplicateImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slider ${index}`}
            style={{
              width: "200px", // Width of each image
              height: "100%", // Full height of the container
              objectFit: "cover", // Ensure the image covers the container
              
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoImageSlider;
