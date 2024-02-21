import {Image} from "@nextui-org/react";

export default function LineaProducto({producto}) {
    return (
        <div className="flex">
            <h3>{producto.nombre}</h3>
            <Image
                className="bg-gray-800 scale-100 shadow-md shadow-gray-400 hover:scale-110"
                style={{height: 200, width: "auto"}} src={producto.imagen} fallbackSrc="img/notFound.png"
            />
            <p>{producto.cantidad}</p>
            <p>{producto.importe}</p>
        </div>
    )
}
