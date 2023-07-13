import style from './Form.module.css';
import {useState} from 'react';
import { validate } from './Validation';

export default function Form (props) {
    const [userData, setUserData] = useState({
        email:"",
        password:"",
    })

    const [errors, setErrors] = useState({
        email:"",
        password:"",
    });

    const handleChange = (event) => {
        const{name, value} = event.target
        setUserData({
            ...userData,
            [name] : value,
        })
        setErrors(validate({
            ...userData,
            [name] : value,
        }))
    };

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.login(userData)
    };

    const handleLogOut = () => {
        props.logOut();
    };

    return (      
        <form className={style.container} onSubmit={handleSubmit}>
                <img src="" alt="Not Found"/>
                <br />
                <label htmlFor= "Email">Email: </label>
                <input type="text" value={userData.email} name="email" onChange={handleChange} className={errors.email && style.warning}/>
                {errors.email ? <p style={{color: "red"}}>{errors.email}</p> : null}
                
                <label htmlFor= "Password">Password:</label>
                <input type="Password" value={userData.password} name="password" onChange={handleChange} className={errors.password && style.warning}/>
                {errors.password ? <p style={{color: "red"}}>{errors.password}</p> : null}
                <br />
                <button type='submit'>Login</button>
                <button onClick={handleLogOut}>LogOut</button>
        </form>
    )
};