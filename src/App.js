import style from './App.module.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import Detail from './components/detail/Detail.jsx';
import About from './components/about/About.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// import Form from './components/form/Form';

function App() {

   const location = useLocation();

   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const email = "agandanese@gmail.com";
   const password = "any123";


   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {

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

   // const onClose = (id) => {setCharacters(characters.filter((char) => char.id !== Number(id)))};
   const onClose = (id) => {
      const filtered = characters.filter((char) => char.id !== Number(id));
      setCharacters(filtered);
   };

   function login(userData) {
      if (userData.email === email && userData.password === password) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect (() => {
      !access && navigate("/");
   }, [access]);

   return (
      <div className={style.App}>
         {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
         
         <Routes>
            {/* <Route path='/' element={<Form/>}/> */}
            <Route path="/Home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/About" element={<About/>} />
            <Route path="/Detail/:id" element={<Detail/>} />
         </Routes>
      </div>
   );
}


export default App;
