
import Preloader_img from "../.././assets/images/Preloader_img.gif"

function Preloader() {
  return (
    <div>
      <section className="bg-gray-50 h-150 w-[100%] overflow-hidden flex items-center justify-center">
        <div className="preloader_box flex flex-col items-center">
          <img src={Preloader_img}  alt="Loading..." />
          <h1 className="font-[Lexend] text-2xl mt-2" >Shatadhru</h1>
        </div>
      </section>
    </div>
  );
}

export default Preloader;
