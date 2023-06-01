import axios from 'axios';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


export default function Detail (){
    const {id} = useParams();
    //console.log(id)

    const [characterDetail, setCharacterDetail] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacterDetail(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacterDetail({});
     }, [id]);

    return (
        <div>{
            characterDetail ? (
                <div>
                    <h2>Name: {characterDetail.name}</h2>
                    <h4>Status: {characterDetail.status}</h4>
                    <h4>Species: {characterDetail.species}</h4>
                    <h4>Gender: {characterDetail.gender}</h4>
                    <h4>Origin: {characterDetail.origin?.name}</h4>
                    <img src= {characterDetail.image} alt={characterDetail.name} />
                </div>
            ) : (<h1>Cargando</h1>) 
        }</div>
    )
}

                