import { useState } from "react";

export const Formulario = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [validateName, setValidateName] = useState(true);
  const [validateLastname, setValidateLastname] = useState(true);

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
      setLastname(e.target.value);
    } else {      
      setLastname(e.target.value);
    }
  };

  const enviar = (e) =>{
    e.preventDefault();
    const datos = {
      name,
      lastname
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

    if(validateName && validateLastname){
      alert(`Bienvenido: ${name}`)
    }else{
      alert("Alguno de los datos ingresados no son correctos")
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
        value={lastname}
        placeholder="Ingrese el apellido"
        onChange={cambiarApellido}
        />
      <button onSubmit={enviar}>Enviar</button>
      
        </form>
    </div>
  );
};
export default Formulario;
