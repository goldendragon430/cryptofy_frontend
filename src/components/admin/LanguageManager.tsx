import React from "react";
import { Edit, Remove, Translate } from "./LangComponents";
import LanguageModal from "../LanguageModal";

const LanguageManager: React.FC = () => {
  return (
    <div className="mt-[5rem] flex h-full w-[85%] flex-col items-center justify-center gap-8 bg-[#f3f3f9] p-4">
      <div className="mt-4 flex w-full items-center justify-between text-2xl font-medium text-cblack">
        <h1>Language manager</h1>
        <LanguageModal />
      </div>
      <div className="flex w-full justify-start rounded-lg bg-white">
        <div className="h-[12rem] lg:h-[4rem] w-[1%] rounded-l-lg bg-cblack p-1"></div>
        <div className="flex h-full w-[99%] items-center justify-start px-3 py-5 pl-4 text-xl text-cblack">
          <h1 className="text-base">
            While you are adding a new keyword, it will only add to this current language only. please be carefull on an entering a keyword please make sure there is no extra space. it needs to be exact and case sensitive
          </h1>
        </div>
      </div> 
      <div className="overflow-x-scroll w-full">
        <div className="flex flex-col rounded-lg w-[65rem] lg:w-full">
          <div className="grid grid-cols-4 bg-cblack text-white p-4 rounded-t-lg font-semibold">
            <h1>Name</h1>
            <h1>Code</h1>
            <h1>Default</h1>
            <h1 className="text-right">Actions</h1>
          </div>
          <div className="grid grid-cols-4 bg-white text-cblack p-4 rounded-t-lg font-semibold">
            <h1>English</h1>
            <h1>en</h1>
            <h1 className="border-[1px] border-green-600 p-2 text-green-600 w-min rounded-xl">Default</h1>
            <div className="flex justify-end items-center gap-1">
              <Translate />
              <Edit />
            </div>
          </div>
          <div className="grid grid-cols-4 bg-white text-cblack p-4 rounded-t-lg font-semibold">
            <h1>Hindi</h1>
            <h1>hd</h1>
            <h1 className="border-[1px] border-orange-600 p-2 text-orange-600 w-min rounded-xl">selectable</h1>
            <div className="flex justify-end items-center gap-1">
              <Translate />
              <Edit />
              <Remove />
            </div>
          </div>
          <div className="grid grid-cols-4 bg-white text-cblack p-4 rounded-t-lg font-semibold">
            <h1>Bangla</h1>
            <h1>ba</h1>
            <h1 className="border-[1px] border-orange-600 p-2 text-orange-600 w-min rounded-xl">selectable</h1>
            <div className="flex justify-end items-center gap-1">
              <Translate />
              <Edit />
              <Remove />
            </div>
          </div>
          <div className="grid grid-cols-4 bg-white text-cblack p-4 rounded-t-lg font-semibold">
            <h1>Spanish</h1>
            <h1>sp</h1>
            <h1 className="border-[1px] border-orange-600 p-2 text-orange-600 w-min rounded-xl">selectable</h1>
            <div className="flex justify-end items-center gap-1">
              <Translate />
              <Edit />
              <Remove />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageManager;



