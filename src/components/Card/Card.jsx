import style from "./card.module.css"
import { Link } from "react-router-dom";

export default function Card({id, name, status, species, gender, image, onClose}) {
   return (
      <div className = {style.container}> 
         <div className={style.buttonContainer}>
          <button onClick={()=> onClose(id)} className={style.closeButton}>X</button>
         </div>
         
         <Link to= {`/Detail/${id}`} className={style.link}>
           <div>
            <div className={style.imageContainer}>
               <img src={image} alt={name} />
               <h2 className={style.name}>{name}</h2>
            </div>
            <div className={style.propsContainer}>
               <h2>{species}</h2>
               <h2>{gender}</h2>
               {/* <h2>{status}</h2>
               <h2>{origin.name}</h2> */}
            </div>
           </div>
         </Link>
      </div>
   );
}

