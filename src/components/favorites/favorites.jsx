import { connect } from "react-redux";
import Card from "../card/Card";

function favorites({myFavorites}){
    return (
        <div>
            {myFavorites?.map(({id, name, status, species, gender, image}) => (
                <Card id={id} key={id} name={name} status={status} species={species} gender={gender} image={image}/>
            ))}
        </div>
    )
};

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
};

export default connect (mapStateToProps, null)(favorites)