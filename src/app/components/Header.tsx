"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  const [pokeName, setPokeName] = useState("");

  const handleInput = (e) => {
    setPokeName(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();

    router.push(`/pokesearch/${pokeName}`);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-20 text-center h-[300px] justify-content justify-center">
      <div className="text-center">
        <h1 className="text-bold text-5xl">NextJS Pokemon Finder App</h1>
        <p className="text-xl">Find your favorite Pokemon</p>
        <form onSubmit={handleForm} action="" className="flex mt-2">
          <input
            onChange={handleInput}
            type="text"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-200 shadow-md"
            placeholder="Pokemon name..."
          />
          <button
            className="inline-flex item-center mx-2 px-4 py-2 rounded-md bg-green-300 shadow-md text-white"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
