import React from "react";

const EditContact: React.FC = () => {
  return (
    <div className="mt-20 w-full px-2">
      <div className="rounded-lg bg-white p-1 py-3">
        <div className="flex w-full items-center justify-center">
          <div className="flex w-full flex-col gap-4 lg:grid lg:w-[80%] lg:grid-cols-2">
            <div className="flex flex-col justify-center gap-3 px-2">
              <div className="flex w-full items-center justify-center">
                <label
                  htmlFor="dropzone-file"
                  className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      aria-hidden="true"
                      className="mb-3 h-10 w-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              <label htmlFor="drop" className="w-full relative">
                <button className="flex items-center w-full justify-center rounded-md bg-cblack py-2 font-semibold text-white shadow-md">
                  Header background
                </button>
                <input id="drop" type="file" className="opacity-0 absolute h-full w-full top-0 left-0 cursor-pointer" />
              </label>
              <p className="text-sm">
                Supported file, <strong>.jpeg</strong>
                <strong>.jpg</strong>
                <strong>.png</strong> | will be resized to:{" "}
                <strong>1920x825</strong>
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 px-2">
              <div className="flex w-full items-center justify-center">
                <label
                  htmlFor="dropzone-file"
                  className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      aria-hidden="true"
                      className="mb-3 h-10 w-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>

              <label htmlFor="drop" className="w-full relative cursor-pointer">
                <button className="flex items-center w-full justify-center rounded-md bg-cblack py-2 font-semibold text-white shadow-md">
                  image
                </button>
                <input id="drop" type="file" className="opacity-0 absolute h-full w-full top-0 left-0  cursor-pointer" />
              </label>
              <p className="text-sm">
                Supported file, <strong>.jpeg</strong>
                <strong>.jpg</strong>
                <strong>.png</strong> | will be resized to:{" "}
                <strong>1920x825</strong>
              </p>
            </div>
          </div>
        </div>
        <form action="#" className="mt-4 flex flex-col justify-start gap-2">
          <div className="flex w-full flex-col justify-center gap-2 px-2">
            <label className="self-start">Address</label>
            <input
              type="text"
              placeholder="634 dolphin road 5643"
              className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-2 px-2">
            <label className="self-start">Email one</label>
            <input
              type="email"
              placeholder="johndoe@2013"
              className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-2 px-2">
            <label className="self-start">Email two</label>
            <input
              type="email"
              placeholder="johndoe@2013"
              className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-2 px-2">
            <label className="self-start">Phone one</label>
            <input
              type="tel"
              placeholder="+ 663 237626763632"
              className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-2 px-2">
            <label className="self-start">Phone two</label>
            <input
              type="tel"
              placeholder="+ 663 237626763632"
              className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
            />
          </div>

          <div className="flex w-full flex-col justify-center gap-2 px-2">
            <label className="self-start">Form title</label>
            <input
              type="text"
              placeholder="Send us a message"
              className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
            />
          </div>
          <button
            type="submit"
            className="mx-2 flex items-center justify-center rounded-md bg-cblack py-2 font-semibold text-white shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
