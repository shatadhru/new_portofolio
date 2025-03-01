import { useState } from "react";


function Sign_up() {

  


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const Username_Handaler = (e) => {
    setUsername(e.target.value);
  };
  const Email_Handeler = (e) => {
    setEmail(e.target.value);
  };
  const Password_Handaler = (e) => {
    setPassword(e.target.value);
  
  };



  const Sign_Up_Fortm_Handaler = async () => {
    const response = await fetch("http://localhost:3000/api/data/register", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ password, email, username }),
    });
  };


  return (
    <div>
      <form
        action=""
        className="flex flex-col space-y-2 mt-6"
        onSubmit={Sign_Up_Fortm_Handaler}
      >
        <label htmlFor="username" className="text-sm">
          Username:
        </label>
        <input
          type="text"
          id="username"
          className="block w-full py-2 px-3 text-base outline-1 outline-gray-200 rounded-[10px] text-gray-900 placeholder:text-gray-400 "
          placeholder="Enter your username"
          onChange={Username_Handaler}
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
        />
        <label htmlFor="password" className="text-sm">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="block w-full py-2 px-3 text-base outline-1 outline-gray-200 rounded-[10px] text-gray-900 placeholder:text-gray-400 "
          placeholder="Enter your password"
          onChange={Password_Handaler}
        />

        <button
          type="submit"
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Sign_up
