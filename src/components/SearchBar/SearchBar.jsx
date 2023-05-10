import React, { useState } from 'react';

import { BsSearch } from 'react-icons/bs';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  return ( 
    <form className="flex bg-white w-full max-w-lg justify-between shadow-md gap-3 pr-3">
      <input 
        type="search"
        placeholder="Buscar produtos"
        className="p-3 grow border-none outline-none text-xs font-medium border border-solid border-white"
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button type="submit" className="bg-none border-none text-base flex items-center justify-center text-slate-800">
        <BsSearch
                
        />
      </button>
    </form>
  );
}

export default SearchBar;
