import React, { useState } from "react";
import Search from "../components/Search";
import PokemonData from "../components/PokemonData";
import { fetchPokemon } from "../services/getPokemon";
import { Spinner, Alert, Button } from "react-bootstrap";
// const spinnerStyle = {
//   width: "10rem",
//   height: "10rem",
//   borderWidth: "1rem",
// };
export default function HomePage() {
  const [pokemon, setPokemon] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const getPokemon = async (query) => {
    if (!query) {
      setErrorMsg("you must enter a pokemon name");
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setTimeout(async () => {
      try {
        // const [pokemon, setPokemon] = useState();
        // console.log(query);
        const response = await fetchPokemon(query);
        // console.log(response);
        const results = await response.json();
        // console.log(results);
        setPokemon(results);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
        setErrorMsg("Pokemon not found");
      }
    }, 500);
  };
  return (
    <div>
      {error ? <Alert variant="danger">{errorMsg}</Alert> : null}
      <Search getPokemon={getPokemon} />
      {/* {pokemon.name} */}
      {/* {loading ? <Spinner style={spinnerStyle} animation="border" variant="danger" /> : null} */}
      {/* {loading ? <Spinner animation="border" variant="danger" /> : null} */}
      {loading ? <Button variant="danger" disabled >
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
      : null
      }
      {!loading && pokemon ? (
        <div>
          <PokemonData
            className="p-5"
            name={pokemon.name}
            id={pokemon.order}
            sprite={pokemon.sprites.front_default}
            sprite_shiny={pokemon.sprites.front_shiny}
            sprite_back={pokemon.sprites.back_default}
            sprite_back_shiny={pokemon.sprites.back_shiny}
            abilities={pokemon.abilities}
            stats={pokemon.stats}
            types={pokemon.types}
          />
        </div>
      ) : null}
    </div>
  );
}
