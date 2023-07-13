import style from "./card.module.css"
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../redux/actions";
import   {connect} from 'react-redux';
import { useState, useEffect } from "react";

function Card({id, name, status, species, gender, image, onClose, addFavorite, deleteFavorite, myFavorites}) {

   const [isFav, setIsFav] = useState (false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         deleteFavorite(id);
      }else{
         setIsFav(true);
         addFavorite({id, name, status, species, gender, image, onClose})
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

      return (
      <div className = {style.container}> 
         <div className={style.buttonContainer}>
         {isFav ? (
             <button onClick={handleFavorite}>❤️</button>
          ) : (
             <button onClick={handleFavorite}>🤍</button>
          )}
          {isFav ? null : (<button onClick={()=> onClose(id)} className={style.closeButton}>X</button>
          )}
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

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {
         dispatch (addFavorite(character));
      },
      deleteFavorite: (id) => {
         dispatch (deleteFavorite(id))
      }
   };
};

export default connect (mapStateToProps, mapDispatchToProps)(Card)

