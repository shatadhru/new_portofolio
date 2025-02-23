
function Premium_Buttons({name, onClick}) {
  return (
    <div>
      <button
        className="mt-8 mb-12 px-6 py-2 rounded-2xl hover:shadow hover:shadow-lg hover:transition-all hover:ease-in-out hover:duration-200 cursor-pointer"
        style={{
          background: `linear-gradient(45deg, #FF00AA , #B3027AFF)`, // Dynamic gradient
        }}

        onClick={onclick}
      >
        {name}
      </button>
    </div>
  );
}

export default Premium_Buttons;
