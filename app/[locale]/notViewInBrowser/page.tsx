import React from "react";

const notFoundInBrowser = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-start max-w-[900px] space-y-5">
        <p>
          you cannot view this page in browser, please use the terminal to run
          the command <span className="text-red-500">npm run dev</span> and then
          visit{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            http://localhost:3000/products
          </span>{" "}
          to view the product list.
        </p>
        <ul>
          <li>username: john@gmail.com</li>
          <li>password: changeme</li>
        </ul>
      </div>
    </div>
  );
};

export default notFoundInBrowser;
