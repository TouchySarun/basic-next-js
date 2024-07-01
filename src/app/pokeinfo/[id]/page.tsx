"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // รับค่าจาก url
import Link from "next/link";
import Image from "next/image";

function Pokeinfo() {
  const { id } = useParams();

  const [poke, setPoke] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPokeDetail = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokeData = await res.json();
        setPoke(pokeData);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchPokeDetail();
  }, [id]);

  return (
    <div className="p-24">
      <Link href="/" className="bg-blue-500 text-white p-3 rounded-md">
        Go Back
      </Link>
      <div className="flex justify-center item-center mt-10 text-center">
        <div className="shadow-md p-10 rounded-md">
          {loading ? (
            <p>loading ...</p>
          ) : poke ? (
            <>
              <h3 className="text-3xl">{poke.name}</h3>
              <Image
                src={poke.sprites.other["official-artwork"].front_default}
                width={300}
                height={300}
                alt={poke.name}
              />
              <div className="mt-5">
                <p className="my-3">Weight: {poke.weight} kg</p>
                <p className="my-3">
                  Abilities:{" "}
                  {poke.abilities?.map((a) => (
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
                  {poke.types?.map((t) => (
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

export default Pokeinfo;
