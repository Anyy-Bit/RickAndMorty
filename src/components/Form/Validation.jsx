const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =  /\d/;
    
export const validate = (inputs) => {
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
            if (!regexPassword.test(inputs.password)){
                errors.password = "Debe tener al menos un número"
            }
            if (inputs.password.length < 6 || inputs.password.length > 10){
                errors.password = "Debe tener entre 6 y 10 caracteres"
            }
            return errors;
    };