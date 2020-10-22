// == Import npm
import React from 'react';
// == Import
import './searchbar.scss';

// == Composant
const SearchBar = () => (
  <div className="searchbar">
    <div className="shadow flex">
      <input className="w-full rounded p-2" type="text" placeholder="Rechercher..." />
      <button type="button" className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
        <p>🔍</p>
      </button>
    </div>
  </div>
);

// == Export
export default SearchBar;
