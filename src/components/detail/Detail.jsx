import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import style from './Detail.module.css'

export default function Detail (){
    const navigate = useNavigate();
    const {id} = useParams();

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
        <div className={style.container}>
            <button onClick={() => navigate(-1)}>Regresar</button>
            {characterDetail ? (
                <div className={style.containerDetail}>
                    <h1>Name: {characterDetail.name}</h1>
                    <h2>Status: {characterDetail.status}</h2>
                    <h2>Species: {characterDetail.species}</h2>
                    <h2>Gender: {characterDetail.gender}</h2>
                    <h2>Origin: {characterDetail.origin?.name}</h2>
                    <div className={style.imageContainer}>
                        <img src= {characterDetail.image} alt={characterDetail.name}/>
                    </div>
                    
                </div>
            ) : (<h1>Cargando</h1>) 
        }</div>
    )
}

                