import {Head} from "@inertiajs/react";
import Producto from "@/Components/Producto/Producto.jsx";
import Cabecera from "@/Components/Cabecera/Cabecera.jsx";

export default function Inicio({productos}) {
    return (
        <>
            <Head title={"Informática Digital"}/>
            <Cabecera/>
            <div
                className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5 mx-4 justify-center items-center ">
                {productos.map((producto, id) => <Producto key={id} producto={producto}/>)}
            </div>
        </>
    )
}
