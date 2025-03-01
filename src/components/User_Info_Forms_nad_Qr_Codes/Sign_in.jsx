import { useState } from "react";


function Sign_in() {

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [userid, setUser_id] = useState("");
const [message, setMessage] = useState("");

const Username_Handaler = (e) => {
  setUsername(e.target.value);
};
const Email_Handeler = (e) => {
  setEmail(e.target.value);
};
const User_id_Handaler = (e) => {
  setUser_id(e.target.value);

};

const Sign_In_Form_handaler = async () => {
    const response = await fetch("http://localhost:3000/api/data/login", {
      method: "POST",
      headers:{"Content-type" : "application/json"},
      body: JSON.stringify({userid , email ,username})
    })
};


  return (
    <div>
      <div
        className={`${ message ? "block" : "hidden"} alert_box text-[10px] my-6 text-center text-green-500 rounded-[10px]`}
      >
{message}

      </div>
      <form
        action=""
        className="flex flex-col space-y-2 mt-6"
        onSubmit={Sign_In_Form_handaler}
      >
        <label htmlFor="username" className="text-sm">
          Username:
        </label>
        <input
          type="text"
          id="username"
          className="block w-full py-2 px-3 text-base outline-1 outline-gray-200 rounded-[10px] text-gray-900 placeholder:text-gray-400 "
          onChange={Username_Handaler}
          required
        />
        <label htmlFor="email" className="text-sm">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="block w-full py-2 px-3 text-base outline-1 outline-gray-200 rounded-[10px] text-gray-900 placeholder:text-gray-400 "
          placeholder="Enter your email"
          onChange={Email_Handeler}
          required
        />
        <label htmlFor="password" className="text-sm">
          User id:
        </label>
        <input
          type="userid"
          id="userid"
          className="block w-full py-2 px-3 text-base outline-1 outline-gray-200 rounded-[10px] text-gray-900 placeholder:text-gray-400 "
          placeholder="Enter your User id (Optional) "
          onChange={User_id_Handaler}
        />

        <button
          type="submit"
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Sign_in
