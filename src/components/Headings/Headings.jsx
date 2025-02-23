import underline from "../../assets/images/underline_of_every_headings.svg";

function Headings({title_pink , title_white}) {
  return (
    <div>
      <div className="flex flex-col   text-center items-center  text-3xl font-bold">
        <div className="flex mt-10">
          <h1 className="text-[#FF00AA]">{title_pink}</h1>
          <h1 className="text-white ml-2">{title_white}</h1>
        </div>
        <img src={underline} className="max-w-[200px] mt-2" alt="" />
      </div>
    </div>
  );
}

export default Headings;
