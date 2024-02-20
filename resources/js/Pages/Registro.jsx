import Cabecera from "@/Components/Cabecera/Cabecera.jsx";
import {Head, Link, router} from "@inertiajs/react";
import {useState} from "react";

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
        console.log("paso extra: añadir datos de envio")
        //router.post(route("registrar.usuario"), campos)
    }

    return (
        <>
            <Head title={"Registrarse"}/>
            <Cabecera/>
            <div className="max-w-md relative flex flex-col px-4 py-2  rounded-md text-black bg-gray-100 shadow-md
                        shadow-gray-400 md:mt-2 xl:mt-32 mx-auto">
                <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center"><span
                    className="text-[#7747ff]">Registrate ahora gratis</span></div>
                <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">crea una cuenta con tus datos
                </div>
                <form className="flex flex-col gap-3" onSubmit={enviarFormulario}>
                    <div className="block relative">
                        <label
                            htmlFor="email"
                            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                        >Email</label>
                        <input
                            type="email" id="email" onChange={manejarCambio} name="email" required={true}
                            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px]
                            text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2
                            ring-gray-900 outline-0"/>
                    </div>
                    <div className="block relative">
                        <label
                            htmlFor="nombre"
                            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                        >Nombre</label>
                        <input
                            type="text" id="nombre" onChange={manejarCambio} name="nombre" required={true}
                            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px]
                            text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2
                            ring-gray-900 outline-0"/>
                    </div>
                    <div className="block relative">
                        <label
                            htmlFor="password"
                            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                        >Contraseña</label>
                        <input
                            type="password" onChange={manejarCambio} name="password" required={true}
                            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px]
                            text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2
                            ring-gray-900 outline-0"/>
                    </div>
                    <div className="block relative">
                        <label
                            htmlFor="password_confirmation"
                            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                        >Confirmar contraseña</label>
                        <input
                            type="password" id="password_confirmation" onChange={manejarCambio}
                            name="password_confirmation" required={true}
                            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px]
                            text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2
                            ring-gray-900 outline-0"/>
                    </div>
                    <button type="submit"
                            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
                    >Rellene su información →
                    </button>
                </form>
                <div className="text-sm text-center mt-[1.6rem]">¿Ya tienes una cuenta? <Link
                    className="text-sm text-[#7747ff]" href={route("iniciar.sesion")}>Inicia sesión con tu cuenta</Link>
                </div>
            </div>
        </>
    )
}
