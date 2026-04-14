import React from "react";

const PokemonCardDiseno2 = ({ data }) => {
  const pokemon = data;

  return (
    <div className="bg-gray-900 text-white rounded-2xl shadow-2xl 
                    p-4 w-56 mx-auto text-center 
                    hover:scale-105 transition">

      <h2 className="text-lg font-extrabold capitalize mb-2 tracking-wide">
        {pokemon.name}
      </h2>

      <img
        className="w-24 mx-auto drop-shadow-lg"
        src={pokemon.sprites?.front_default}
        alt={pokemon.name}
      />

      <div className="flex justify-center gap-2 mt-2 flex-wrap">
        {pokemon.types?.map((t, i) => (
          <span
            key={i}
            className="bg-purple-600 px-3 py-1 rounded-full text-xs font-semibold"
          >
            {t.type.name}
          </span>
        ))}
      </div>

      <div className="mt-3 text-xs space-y-1 font-semibold">
        <p>❤️ HP: {pokemon.stats?.[0]?.base_stat}</p>
        <p>⚔️ ATK: {pokemon.stats?.[1]?.base_stat}</p>
        <p>🛡️ DEF: {pokemon.stats?.[2]?.base_stat}</p>
      </div>

      <button className="mt-3 bg-green-500 px-4 py-2 rounded-lg text-xs font-bold hover:bg-green-600 transition">
        Ver Detalles
      </button>
    </div>
  );
};

export default PokemonCardDiseno2;