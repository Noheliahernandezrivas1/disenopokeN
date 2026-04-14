import { useState, useEffect } from "react";
import CardGrid from "../components/Cards/CardGrid";
import PokemonCardDiseno2 from "../components/Pokemon/PokemonCardDiseno2"; 
import Loader from "../components/Loaders/Loader";
import { usePokemonService } from "../context/Context";

const MiDiseno = () => {

  const [isFetching, setIsFetching] = useState(false);
  const [PokemonListData, setPokemonListData] = useState([]);
  const PokemonServiceInstance = usePokemonService();

  useEffect(() => {
    if (PokemonServiceInstance) {
      setIsFetching(true);

      PokemonServiceInstance.FetchList(1, 20, (list) => {
        setPokemonListData(list);
        setIsFetching(false);
      });
    }
  }, [PokemonServiceInstance]);

  return (
    <section className="mx-auto max-w-7xl">

      <h1 className="text-2xl font-bold text-center mb-4">
        Mi Diseño 
      </h1>

      <div className="relative">
        {isFetching && <Loader />}

        <CardGrid
          gridItems={PokemonListData?.map(o => (
            <PokemonCardDiseno2
              data={o?.value}
              key={o?.value.id}
            />
          ))}
        />
      </div>

    </section>
  );
};

export default MiDiseno;