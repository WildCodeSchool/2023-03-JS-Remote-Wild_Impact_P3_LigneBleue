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
      const Tutos = await connexion.get(`/tutos?name=${search}`);
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
    <div>
      <input
        placeholder="Cherchez votre tuto"
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />
      <select id="">
        {tutos.map((tuto) => (
          <option key={tuto.id}>
            <Link to="/tutoriel" />
          </option>
        ))}
      </select>

      <button type="submit" onClick={UpdateParams}>
        <FaSearch id="search-icon" />
      </button>
    </div>
  );
}

export default SearchBar;
