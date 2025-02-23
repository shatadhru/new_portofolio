
function Card({ name, color, size, description, color2, Icon }) {
  return (
    <div>
      <div
        className="bg-black w-10/12 h-[300px] mt-10 ml-10 rounded-[20px] hover:shadow-amber-50 hover:shadow-2xs cursor-pointer"
        style={{ boxShadow: "0 -0px 20px rgba(59, 130, 246, 1)" }}
      >
        <div className="flex flex-col text-white items-center justify-center mt-2">
          {/* Render the icon dynamically */}
          <Icon size={size} className="ml-10 mr-10 mt-6" />
          <h1 className="mt-2 text-3xl">{name}</h1>
          <p className="text-center  text-[12px] mt-2 pl-2 pr-2 max-w-[400px]">{description}</p>

          {/* Button with dynamic gradient color */}
          <button
            className="mt-[10%]  px-6 py-2 rounded-2xl hover:shadow hover:shadow-lg hover:transition-all hover:ease-in-out hover:duration-200 cursor-pointer"
            style={{
              background: `linear-gradient(45deg, ${color}, ${color2})`, // Dynamic gradient
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
