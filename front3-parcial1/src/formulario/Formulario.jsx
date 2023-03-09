import { useState } from "react";

export const Formulario = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [validateName, setValidateName] = useState(true);
  const [validatePassword, setValidateLastname] = useState(true);

  const cambiarNombre = (e) => {
    if (e.target.value.length > 3) {
      setName(e.target.value);
      //setValidar(true);
    } else {
      console.log("Todavia no entro");
      setName(e.target.value);
      //setValidar(false);
    }
  };
  
  const cambiarApellido = (e) => {
    if (e.target.value.length > 6) {
      setPassword(e.target.value);
    } else {      
      setPassword(e.target.value);
    }
  };

  const enviar = (e) =>{
    e.preventDefault();
    const datos = {
      name,
      password
    }
    console.log(datos.name)
    console.log(datos.lastname)
    if (datos.name.trim() !== "" && datos.name.length > 3) {
      setValidateName(true)
    }else{
      setValidateName(false)
      console.log("Debe tener más de 3 carácteres")
    }
    if (datos.lastname.trim() !== "" && datos.lastname.length > 6) {
      setValidateLastname(true)
    }else{
      setValidateLastname(false)
      console.log("Debe tener más de 6 carácteres")
    }

    if(validateName && validatePassword){
      alert(`Bienvenido: ${name}`)
    }else{
      alert("Algunos de los datos ingresados no son correctos")
    }
  };
  
  
  return (
    <div onSubmit={enviar}>
      <form>

      <input
        placeholder="Ingrese el nombre"
        id="nombre"
        name="nombre"
        value={name}
        onChange={cambiarNombre}
        />
      <input
        id="apellido"
        name="apellido"
        value={password}
        placeholder="Ingrese el apellido"
        onChange={cambiarApellido}
        />

      <button onSubmit={enviar}>Enviar</button>
      
        </form>
    </div>
  );
};
export default Formulario;
