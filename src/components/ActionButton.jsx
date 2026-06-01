import React from "react";


export default function ActionButton({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            className="
      bg-[#b4ff39] text-black py-4 px-10 rounded-full font-bold w-full transition-all
      hover:bg-black hover:text-[#b4ff39] border-2 border-transparent hover:border-[#b4ff39]
      active:bg-white">
            + {text}
        </button>
    );
}
