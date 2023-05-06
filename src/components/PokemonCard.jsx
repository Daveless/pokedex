import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { changeName } from "../store/slices/userName.slice";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = window.localStorage.getItem("name");
  const [currentPokemon, setCurrentPokemon] = useState();
  const URL = pokemon.url;
  const typeOfCurrentPokemon = currentPokemon?.types[0].type.name;

  const bgPokemonColors = {
    normal:
      "bg-gradient-to-b from-[#735259] from-10% via-[#BC6B7C] via-30% to-[#7C3F4C] to-90%",
    fighting:
      "bg-gradient-to-b from-[#96402A] from-10% via-[#F1613C] via-30% to-[#CB735D] to-90%",
    flying:
      "bg-gradient-to-b from-[#77b365] from-10% via-[#438065] via-30% to-[#708e30] to-90%",
    poison:
      "bg-gradient-to-b from-[#5B3184] from-10% via-[#A564E3] via-30% to-[#CE9BFF] to-90%",
    ground:
      "bg-gradient-to-b from-[#654008] from-10% via-[#895C1A] via-30% to-[#D69638] to-90%",
    rock: "bg-gradient-to-b from-[#7E7E7E] from-10% via-[#8D8D94] via-30% to-[#D3D3D3] to-90%",
    bug: "bg-gradient-to-b from-[#62DB60] from-10% via-[#3BB039] via-30% to-[#AAFFA8] to-90%",
    ghost:
      "bg-gradient-to-b from-[#323569] from-10% via-[#454AA8] via-30% to-[#787DDA] to-90%",
    steel:
      "bg-gradient-to-b from-[#5E736C] from-10% via-[#728881] via-30% to-[#A8A8A8] to-90%",
    fire: "bg-gradient-to-b from-[#F96D6F] from-10% via-[#E35825] via-30% to-[#E8AE1B] to-90%",
    water:
      "bg-gradient-to-b from-[#7EC6C5] from-10% via-[#ABDAC6] via-30% to-[#CAE099] to-90%",
    grass:
      "bg-gradient-to-b from-[#133258] from-10% via-[#1479FB] via-30% to-[#82B2F1] to-90%",
    electric:
      "bg-gradient-to-b from-[#0C1395] from-10% via-[#2B319B] via-30% to-[#7075D9] to-90%",
    psychic:
      "bg-gradient-to-b from-[#271048] from-10% via-[#35224f] via-30% to-[#383456] to-90%",
    ice: "bg-gradient-to-b from-[#6FBEDF] from-10% via-[#64CBF5] via-30% to-[#BDEBFE] to-90%",
    dragon:
      "bg-gradient-to-b from-[#478A93] from-10% via-[#56A4AE] via-30% to-[#A2BEC1] to-90%",
    dark: "bg-gradient-to-b from-[#030706] from-10% via-[#0D1211] via-30% to-[#5A5E5D] to-90%",
    fairy:
      "bg-gradient-to-b from-[#971B45] from-10% via-[#C23867] via-30% to-[#CD7D98] to-90%",
    unknown:
      "bg-gradient-to-b from-[#87b673] from-10% via-[#77b45e] via-30% to-[#89b13f] to-90%",
    shadow:
      "bg-gradient-to-b from-[#1d0737] from-10% via-[#190b29] via-30% to-[#0e0d10] to-90%",
  };

  useEffect(() => {
    dispatch(changeName(data));
    if (!data.length) {
      setTimeout(() => {
        navigate("/");
      }, "3000");
    }
    axios
      .get(URL)
      .then((res) => setCurrentPokemon(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Link  className={`border rounded-xl ${bgPokemonColors[typeOfCurrentPokemon]} w-[100%] flex items-center justify-center aspect-[3/4] md:aspect-[2/3]`} to={`/pokedex/${currentPokemon?.id}`}>
      <div className={`rounded-xl w-[95%] h-[95%] grid grid-rows-[28%_7%_65%] grid-cols-1`}>
        <div className={`${bgPokemonColors[typeOfCurrentPokemon]} row-start-1 row-end-2 z-20 col-start-1 col-end-2`}></div>
        <div className="row-start-1 row-end-3 z-40 col-start-1 col-end-2 flex justify-center">
          <img className="object-contain w-[100%]" src={currentPokemon?.sprites.other['official-artwork'].front_default} alt="" /></div>
        <div className="row-start-2 row-end-4 bg-white z-30 col-start-1 col-end-2">
        </div>
        <div className="row-start-3 row-end-4 z-30 col-start-1 col-end-2 justify-center text-center">
        <p className="font-semibold text-2xl">{pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}</p>
        <p className="text-[14px]">{currentPokemon?.types.slice(0,2).map(type => type.type.name).join(' / ')}</p>
        <p className="text-[11px] text-black/60">Type</p>
        <hr />
        <div className="grid grid-cols-2 grid-rows-2 h-[60%] items-center">
          <div>
            <p className="text-[12px] text-black/60">{currentPokemon?.stats[0].stat.name.toUpperCase()}</p>
            <p className="font-semibold text-[18px]">{currentPokemon?.stats[0].base_stat}</p>            
          </div>
          <div>
            <p className="text-[12px] text-black/60">{currentPokemon?.stats[1].stat.name.toUpperCase()}</p>
            <p className="font-semibold text-[18px]">{currentPokemon?.stats[1].base_stat}</p>            
          </div>
          <div>
            <p className="text-[12px] text-black/60">{currentPokemon?.stats[2].stat.name.toUpperCase()}</p>
            <p className="font-semibold text-[18px]">{currentPokemon?.stats[2].base_stat}</p>            
          </div>
          <div>
            <p className="text-[12px] text-black/60">{currentPokemon?.stats[5].stat.name.toUpperCase()}</p>
            <p className="font-semibold text-[18px]">{currentPokemon?.stats[5].base_stat}</p>            
          </div>
        </div>
        </div>
      </div>
    </Link>
  );
};
export default PokemonCard;
