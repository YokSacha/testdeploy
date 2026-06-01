import React from "react";


export default function ProductButton({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            className="
      bg-[#b4ff39]/25 text-[#b4ff39] py-4 px-10 rounded-full font-bold w-full transition-all
      hover:bg-[#b4ff39] hover:text-black border-2 border-transparent
      active:bg-white">
            + {text}
        </button>
    );
}
