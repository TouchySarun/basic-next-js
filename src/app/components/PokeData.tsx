"use Client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function PokeData() {
  const [poke, setPoke] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPokeData = async () => {
      try {
        const res = await fetch(" https://pokeapi.co/api/v2/pokemon");
        const pokeData = await res.json();
        setPoke(pokeData.results);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchPokeData();
  }, []);

  return (
    <div className="container text-center mx-auto">
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="grid grid-cols-5">
          {poke.map((p, i) => (
            <Link
              key={p.name}
              href={`/pokeinfo/[id]`}
              as={`/pokeinfo/${i + 1}`} // ส่งค่าไปที่ pokeinfo (ค่า i+1)
            >
              <div
                key={i}
                className="flex justify-center item-center shadow-md transition cursor-pointer hover:shadow-lg m-3 rounded-md"
              >
                <div>
                  <h3>{p.name}</h3>
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                      i + 1
                    }.png`}
                    width={150}
                    height={150}
                    alt={p.name}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default PokeData;
