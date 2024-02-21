import Cabecera from "@/Components/Cabecera/Cabecera.jsx";
import {Head} from "@inertiajs/react";
import LineaProducto from "@/Components/Producto/LineaProducto.jsx";

export default function Carrito({productos, importeTotal}) {
    return (
        <>
            <Head title={"Carrito"}/>
            <Cabecera/>
            {productos.map((producto, id) => <LineaProducto key={id} producto={producto}/>)}
            <p>{importeTotal}€</p>
        </>
    )
}
