import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';


function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         let repeatedCharacter = characters.find((char) => char.id === data.id);
         if(!characters.find(char => char.id === data.id)){
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }else{
            alert(`Ya existe el personaje con el ID ${id}`)
         }
      });
   };

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== Number(id)))
   };

   return (
      <div className='App' >
         <div className={style.nav}>
            <Nav onSearch={onSearch}/>
         </div>
         <hr/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}


export default App;
