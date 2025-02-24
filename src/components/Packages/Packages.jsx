
import { IoClose } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import Premium_Buttons from "../Buttons/Premium_Buttons";

function Packages({ ok_service = [], Not_ok_service = [], name, Description, Icon}) {
  return (
    <div>
      <section className="bg-black  flex flex-col items-center mt-10 text-white">
        <div
          className="bg-black flex flex-col items-center w-[80vh]  h-[680px] mt-10 rounded-[20px] hover:shadow-amber-50 hover:shadow-2xs cursor-pointer"
          style={{ boxShadow: "0px  2px 10px 0px #FB64B6" }}
        >
          <Icon size={60} className="mt-12" />

          <h1 className="mt-4 text-2xl">{name}</h1>
          <p className="text-center text-[12px] mt-2">{Description}</p>

          <div className="mt-4 mx-6">
            {ok_service.map((item, key) => (
              <div key={key} className="flex items-center gap-2 mb-2">
                <MdDone color="lime" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 mx-6">
            {Not_ok_service.map((item, key) => (
              <div key={key} className="flex items-center gap-2 mb-2">
                <IoClose color="red" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <Premium_Buttons name="Explore Now" />
        </div>
      </section>
    </div>
  );
}

export default Packages;
