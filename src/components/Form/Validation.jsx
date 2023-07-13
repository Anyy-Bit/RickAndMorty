const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =  /\d/;
    
export const validate = ({email, password}) => {
        const errors = {};
            if (!regexEmail.test(email)) {
            errors.email = "Debe ser un correo electrónico";
             }
            if (!email) {
                errors.email = "Se requiere un nombre";
            }
            if (email.length > 35) {
                errors.email = "No puede superar los 35  caracteres";
            }
            if (!regexPassword.test(password)){
                errors.password = "Debe tener al menos un número"
            }
            if (password.length < 6 || password.length > 10){
                errors.password = "Debe tener entre 6 y 10 caracteres"
            }
            return errors;
    };