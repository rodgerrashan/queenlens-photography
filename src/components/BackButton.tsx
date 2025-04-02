"use client"
import { IoArrowBack } from "react-icons/io5";
import { SlArrowLeft } from "react-icons/sl";

export default function BackButton() {
  return (
    <div className="bg-gray-950">
      <div className="flex flex-row items-stretch justify-start">
        <button
          onClick={() => window.history.back()}
          className="relative ml-12 rounded-full hover:bg-gray-400 transition font-slate-100 duration-300 ease-in-out p-3 mt-1 mb-1"
        >
          <IoArrowBack className="text-white text-xl" />
        </button>
       
      </div>
    </div>
  );
}
