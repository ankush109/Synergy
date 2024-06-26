import Head from "next/head";
import { useState, useEffect } from "react";
const PP = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [about, setAbout] = useState("");
  const [follow, setFollow] = useState(false);
  const [message, setMessage] = useState(false);

  //   const followHandler = () => {
  //     console.log("Followed");
  //   };

  //   const messageHandler = () => {
  //     console.log("Message");
  //   };
  return (
    <div className="card  min-w-sm border border-gray-700 bg-gray-800 text-gray-50   transition-shadow shadow-xl hover:shadow-xl min-w-max">
      {/**/}
      <div className="w-full card__media">
        <img
          src="https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg"
          className="h-80 w-full"
        />
      </div>
      <div className="flex items-center p-4">
        <div className="relative flex flex-col items-center w-full">
          <div className="h-40 w-40 md rounded-full relative avatar flex items-end justify-end text-purple-400 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
            <img
              className="h-40 w-40 md rounded-full relative"
              src="https://c0.wallpaperflare.com/preview/325/981/320/avatar-people-person-business.jpg"
              alt=""
            />
            <div className="absolute" />
          </div>
          <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
            <span className="text-lg whitespace-nowrap text-gray-50 font-semibold">
              Ron007
            </span>
            <span className="text-md whitespace-nowrap text-gray-100">
              Ron007
            </span>
            <p className="text-md text-gray-200">
              I binge watch anime seasons in a night
            </p>
            <div className="py-2 flex ">
              <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                <span className="mr-2">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chat-left-text"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                      fill="white"
                    ></path>{" "}
                    <path
                      d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                </span>
                Edit <span className="ml-2" />
              </button>
            </div>
            <div className="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
              <span className="text-center px-2">
                <span className="font-bold text-gray-50">56</span>
                <span className="text-gray-100"> Followers</span>
              </span>
              <span className="text-center px-2">
                <span className="font-bold text-gray-50">112</span>
                <span className="text-gray-100"> Following</span>
              </span>
              <span className="text-center px-2">
                <span className="font-bold text-gray-50">27</span>
                <span className="text-gray-100"> Posts</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/**/}
      <div className="relative flex flex-col items-center w-full">
        <div className="flex flex-col space-y-2">
          <span className="text-gray-100">Posts</span>
          <span className="text-gray-100">Posts</span>
          <span className="text-gray-100">Posts</span>
          <span className="text-gray-100">Posts</span>
        </div>
      </div>
    </div>
  );
};
export default PP;
