import Cabecera from "@/Components/Cabecera/Cabecera.jsx";
import {Head, usePage} from "@inertiajs/react";
import LineaProducto from "@/Components/Producto/LineaProducto.jsx";
import {Button} from "@nextui-org/react";

export default function Carrito({productos, importeTotal}) {
    const {props} = usePage()

    function realizarCompra() {
        if (props.auth.user == null) {
            alert("Para realizar una compra, inicie sesión")
        }
    }

    return (
        <>
            <Head title={"Carrito"}/>
            <Cabecera/>
            <div className="flex flex-col justify-center">
                <h1 className="text-center text-2xl mt-4">Tus productos en el carrito</h1>
                <Button
                    className="w-fit self-center mt-2 mb-2" onClick={realizarCompra}
                    type={"button"} color={"success"} variant={"ghost"} size={"lg"}>Comprar</Button>
                <h1 className="text-center text-2xl mt-2">Total de la compra: {importeTotal}€</h1>
                {productos.map((producto, id) => <LineaProducto key={id} producto={producto}/>)}
            </div>
        </>
    )
}
