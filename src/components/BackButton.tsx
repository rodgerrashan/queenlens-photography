"use client"
import { SlArrowLeft } from "react-icons/sl";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="relative ml-24 rounded-full  hover:bg-gray-400 transition"
    >
      <SlArrowLeft className="text-black text-xl" />
    </button>
  );
}