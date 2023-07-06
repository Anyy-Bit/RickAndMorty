import style from './Form.module.css';
import {useState} from 'react';

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
    }

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const validate = (inputs) => {
        const errors = {};
            if (!regexEmail.test(inputs.email)) {
            errors.email = "Debe ser un correo electrónico";
             }
            if (!inputs.email) {
                errors.email = "Se requiere un nombre";
            }
            if (inputs.email.length > 35) {
                errors.email = "No puede superar los 35  caracteres";
            }
            return errors;
                }


    return (
        <Form className={style.container}>
                <img src="" alt="Not Found" />
                <br />
                <label htmlFor= "Email">Email: </label>
                <input type="text" value={userData.email} name="email" onChange={handleChange}/>
                
                <label htmlFor= "Password">Password:</label>
                <input type="Password" value={userData.password} name="password" onChange={handleChange}/>
                
                <br />
                <button>Submit</button>
        </Form>
    )
}