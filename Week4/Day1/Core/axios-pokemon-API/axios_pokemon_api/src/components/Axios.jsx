import { useState } from 'react';
import axios from 'axios';

const FetchPokemon = () => {
    const [allPokemon, setAllPokemon] = useState();

    const AxiosPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then(res => {
                console.log(res) 
                setAllPokemon(res.data.results)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <button onClick={AxiosPokemon} className='btn btn-secondary mt-5'>Axios Pokemon</button>
            <div className="pokemon-list mt-5">
                <ul>
                    {
                        allPokemon &&
                        allPokemon.map((pokemon, index) => {
                            return (
                                <li key={index}>{pokemon.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default FetchPokemon