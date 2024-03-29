import {Button, Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import {useState} from "react";
import {router} from "@inertiajs/react";

export default function Producto({producto}) {
    const [compra, setCompra] = useState({
        cantidad: 1,
        producto: producto.id
    })

    function cambiarCantidad(e) {
        const cantidad = e.target.value
        setCompra(compra => ({
            ...compra,
            cantidad: cantidad
        }))
    }

    function agregarAlCarrito() {
        if (compra.cantidad !== 0) {
            router.post(route("agregar.carrito"), compra, {preserveScroll: true})
        }
    }

    return (
        <Card className="w-100">
            <CardHeader className="flex flex-col items-start shadow-md shadow-white">
                <small className="text-default-500">{producto.cantidad} uds.</small>
                <h1 className="text-medium w-3/4">{producto.nombre}</h1>
            </CardHeader>
            <CardBody className="flex items-center bg-gray-100 shadow-md shadow-gray-100">
                <Image
                    className="bg-gray-800 scale-100 shadow-md shadow-gray-400 hover:scale-110"
                    style={{height: 200, width: "auto"}} src={producto.imagen} fallbackSrc="img/notFound.png"
                />
            </CardBody>
            <CardFooter className="flex justify-between px-4">
                <p>{producto.precio}€</p>
                <div className="flex justify-end items-center w-full">
                    <input
                        type={"number"} min={0} max={producto.cantidad} className="rounded-2xl mr-4" defaultValue={1}
                        onChange={cambiarCantidad}
                    />
                    <Button color={"secondary"} variant={"bordered"} type={"button"}
                            onClick={agregarAlCarrito}>Añadir al carrito</Button>
                </div>
            </CardFooter>
        </Card>
    )
}
