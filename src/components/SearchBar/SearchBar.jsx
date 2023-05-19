import style from "./searchBar.module.css"
import { useState } from 'react';

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");

   const handleChange = (event) =>{
      setId(event.target.value)
   };

   return (
      <div className={style.bar}>
         <input 
         className={style.searchInput} type='search' 
         onChange={handleChange} placeholder="Ingresa un ID" 
         />
         <button 
         className={style.searchButton}  onClick={() => onSearch(id)}> Buscar </button>
      </div>
   );
}
