import Cabecera from "@/Components/Cabecera/Cabecera.jsx";
import {Head} from "@inertiajs/react";
import Pedido from "@/Components/Pedido/Pedido.jsx";

export default function Perfil({usuario, pedidos}) {

    return (
        <>
            <Cabecera/>
            <Head title={"Perfil - " + usuario.nombre}/>
            <div className="grid grid-cols-2 justify-center items-center gap-4 mx-4">
                <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-gray-100 shadow-md
                shadow-gray-400  md:mt-8 xl:mt-24 mx-auto w-3/4 self-start">
                    <h2 className="self-center text-3xl">{usuario.nombre}</h2>
                    <h4 className="self-center opacity-60">{usuario.email}</h4>
                    <h3 className="text-xl mt-2">Datos personales</h3>
                    <p className="ml-3">{usuario.dni}</p>
                    <p className="ml-3">{usuario.fecha}</p>
                    <h3 className="text-xl mt-2">Datos de envío</h3>
                    <p className="ml-3">{usuario.pais}</p>
                    <p className="ml-3">{usuario.provincia}</p>
                    <p className="ml-3">{usuario.poblacion}</p>
                    <p className="ml-3">{usuario.cp}</p>
                </div>
                <div className="flex flex-col justify-center items-center md:mt-8 xl:mt-24">
                    <h2 className="self-center text-3xl mb-4">Pedidos</h2>
                    {pedidos.map((pedido, id) => <Pedido key={id} pedido={pedido}/>)}
                </div>
            </div>
            <ul>
            </ul>
        </>
    )
}
