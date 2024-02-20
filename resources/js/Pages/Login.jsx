import Cabecera from "@/Components/Cabecera/Cabecera.jsx";
import {Head, Link, router} from "@inertiajs/react";
import {useState} from "react";
import Campo from "@/Components/Campo/Campo.jsx";

export default function Login() {
    const [campos, setCampos] = useState({
        email: "",
        password: "",
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
        router.post(route("autenticar"), campos)
    }

    return (
        <>
            <Head title={"Inicio de sesión"}/>
            <Cabecera/>
            <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-gray-100 shadow-md
                        shadow-gray-400  md:mt-16 xl:mt-32 mx-auto">
                <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center"><span
                    className="text-[#7747ff]">Bienvenido</span></div>
                <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Inicia sesión en tu cuenta
                </div>
                <form className="flex flex-col gap-3" onSubmit={enviarFormulario}>
                    <Campo label={"Email"} id={"email"} funcion={manejarCambio} tipo={"email"}/>
                    <Campo label={"Contraseña"} id={"password"} funcion={manejarCambio} tipo={"password"}/>
                    <button type="submit"
                            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
                    >Iniciar sesión
                    </button>
                </form>
                <div className="text-sm text-center mt-[1.6rem]">¿No tienes una cuenta? <Link
                    className="text-sm text-[#7747ff]" href={route("registrar")}>Registrate gratis</Link></div>
            </div>
        </>
    )
}
