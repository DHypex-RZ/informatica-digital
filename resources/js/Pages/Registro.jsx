import Cabecera from "@/Components/Cabecera/Cabecera.jsx";
import {Head, Link, router} from "@inertiajs/react";
import {useState} from "react";
import Campo from "@/Components/Campo/Campo.jsx";

export default function Registro() {
    const [campos, setCampos] = useState({
        email: "",
        password: "",
        password_confirmation: "",
        nombre: "",
        fecha: "",
        pais: "España",
        provincia: "",
        poblacion: "",
        cp: ""
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
        router.post(route("registrar.usuario"), campos)
    }

    return (
        <>
            <Head title={"Registrarse"}/>
            <Cabecera/>
            <div className="max-w-md relative flex flex-col px-4 py-2 rounded-md text-black bg-gray-100 shadow-md
                        shadow-gray-400 my-4 mx-auto">
                <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center"><span
                    className="text-[#7747ff]">Registrate ahora gratis</span></div>
                <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">crea una cuenta con tus datos
                </div>
                <form className="flex flex-col gap-3" onSubmit={enviarFormulario}>
                    <Campo label={"Email"} id={"email"} funcion={manejarCambio} tipo={"email"}/>
                    <Campo label={"Contraseña"} id={"password"} funcion={manejarCambio} tipo={"password"}/>
                    <Campo
                        label={"Confrimar Contraseña"} id={"password_confirmation"} funcion={manejarCambio}
                        tipo={"password"}/>
                    <Campo label={"Nombre"} id={"nombre"} funcion={manejarCambio} tipo={"text"}/>
                    <Campo label={"Fecha de nacimiento"} id={"fecha"} funcion={manejarCambio} tipo={"date"}/>
                    <Campo label={"DNI"} id={"dni"} funcion={manejarCambio} tipo={"text"}/>
                    <div className="block relative">
                        <label
                            htmlFor="pais"
                            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                        >País</label>
                        <select
                            id="pais" name="pais" required={true} onChange={manejarCambio}
                            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px]
                            text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2
                            ring-gray-900 outline-0">
                            <option value="España">España</option>
                            <option value="Portugal">Portugal</option>
                        </select>
                    </div>
                    <Campo label={"Provincia"} id={"provincia"} funcion={manejarCambio} tipo={"text"}/>
                    <Campo label={"Población"} id={"poblacion"} funcion={manejarCambio} tipo={"text"}/>
                    <Campo label={"Código Postal"} id={"cp"} funcion={manejarCambio} tipo={"text"}/>
                    <button type="submit"
                            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
                    >Registrarse
                    </button>
                </form>
                <div className="text-sm text-center mt-[1.6rem]">¿Ya tienes una cuenta? <Link
                    className="text-sm text-[#7747ff]" href={route("iniciar.sesion")}>Inicia sesión con tu cuenta</Link>
                </div>
            </div>
        </>
    )
}
