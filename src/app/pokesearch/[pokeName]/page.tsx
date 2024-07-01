"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function PokeResult() {
  const { pokeName } = useParams();

  const [pokeData, setPokeData] = useState<any>();
  const [loading, setLoading] = useState(false);

  const fetchPokeData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
      const data = await res.json();
      setPokeData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPokeData();
  }, []);

  return (
    <div className="p-24">
      <Link href="/" className="bg-blue-500 text-white p-3 rounded-md">
        Go Back
      </Link>
      <div className="flex justify-center item-center mt-10 text-center">
        <div className="shadow-md p-10 rounded-md">
          {loading ? (
            <p>loading ...</p>
          ) : pokeData ? (
            <>
              <h3 className="text-3xl">{pokeData.name}</h3>
              <Image
                src={pokeData.sprites.other["official-artwork"].front_default}
                width={300}
                height={300}
                alt={pokeData.name}
              />
              <div className="mt-5">
                <p className="my-3">Weight: {pokeData.weight} kg</p>
                <p className="my-3">
                  Abilities:{" "}
                  {pokeData.abilities?.map((a) => (
                    <span
                      key={a.ability.name}
                      className="bg-gray-500 text-white px-3 py-1 rounded-md"
                    >
                      {a.ability?.name}
                    </span>
                  ))}
                </p>
                <p className="my-3">
                  Typies:{" "}
                  {pokeData.types?.map((t) => (
                    <span
                      key={t.type?.name}
                      className="bg-gray-500 text-white px-3 py-1 rounded-md"
                    >
                      {t.type?.name}
                    </span>
                  ))}
                </p>
              </div>
            </>
          ) : (
            <p>not found poke data</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokeResult;
