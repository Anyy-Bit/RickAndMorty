import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Detail from './View/Detail/Detail.jsx';
import About from './View/About/About.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
// import Form from './components/Form/Form';



function App() {

   const {pathname} = useLocation();

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         //console.log(data);
       
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
         {pathname !== "/" && <Nav onSearch={onSearch}/>}
         
         <Routes>
            {/* <Route path="/" element={<Form/>} /> */}
            <Route path="/Home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/About" element={<About/>} />
            <Route path="/Detail/:id" element={<Detail/>} />
         </Routes>
      </div>
   );
}


export default App;
