import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import connexion from "../services/connexion";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [tutos, setTutos] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const getTuto = async () => {
    try {
      const Tutos = await connexion.get(`/tutorials?name=${search}`);
      setTutos(Tutos);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (value) => {
    setSearch(value);
  };

  const UpdateParams = () => {
    setSearchParams({ name: search });
    getTuto();
  };

  return (
    <div className="max-sm:order-3 max-sm:m-2 w-66 flex flex-col items-center justify-center overflow-hidden rounded-lg group bg-gradient-to-br ring-2 ring-red-200 from-red-200 via-red-300 to-yellowbutton-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellowbutton-200 focus:ring-4 focus:outline-none focus:ring-red-200 ">
      <div className="flex">
        <input
          placeholder="Recherchez un tuto"
          value={search}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
        />
        <button type="submit" onClick={UpdateParams} className="p-4">
          <FaSearch id="search-icon" />
        </button>
      </div>
      <ul className="">
        {tutos.map((tuto) => (
          <li key={tuto.id}>
            <Link to={`/formations/${tuto.formation_id}/tutoriel/${tuto.id}`}>
              {tuto.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
