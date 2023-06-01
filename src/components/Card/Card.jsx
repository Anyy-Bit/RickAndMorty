import style from "./card.module.css"
import { Link } from "react-router-dom";

export default function Card({id, name, status, species, gender, image, onClose}) {
   return (
      <div className = {style.container} > 
         <button onClick={()=> onClose(id)} className={style.closeButton}>X</button>
         <Link to= {`/Detail/${id}`}>
         <div>
         <h2>{name}</h2>
         <img src={image} alt={name} />
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin.name}</h2>
         </div>
         </Link>
      </div>
   );
}

