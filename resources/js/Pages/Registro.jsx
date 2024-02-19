import Cabecera from "@/Components/Cabecera/Cabecera.jsx";
import {Head} from "@inertiajs/react";
import {useState} from "react";
import {Input} from "@nextui-org/react";

export default function Registro() {
    const [campos, setCampos] = useState({
        nombre: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    function manejarCambio(evento) {
        const key = evento.target.name
        const valor = evento.target.value
        setCampos(campos => ({
            ...campos,
            [key]: valor,
        }))
    }

    function enviarFormulario(evento) {
        evento.preventDefault()
        console.log(campos)
        //router.post(route("registrar.usuario"), campos)
    }

    return (
        <>
            <Head title={"Registrarse"}/>
            <Cabecera/>
            <form>
                <Input type="email" variant={"underlined"} label="Email" placeholder="Enter your email"
                       isClearable={true}/>
            </form>
        </>
    )
}
