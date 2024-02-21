import {Image} from "@nextui-org/react";

export default function LineaProducto({producto}) {
    return (
        <div className="flex bg-gray-200 border rounded-lg p-4 items-center w-3/4 my-3 mx-auto justify-center">
            <div className="flex flex-col justify-center items-center w-1/4">
                <h3 className="mb-2">{producto.nombre}</h3>
                <Image
                    className="bg-gray-800 scale-100 shadow-md shadow-gray-400 hover:scale-110 "
                    style={{height: 100, width: "auto"}} src={producto.imagen} fallbackSrc="img/notFound.png"
                />
            </div>
            <div className="flex flex-col justify-center items-center w-1/4">
                <h3 className="mb-2">Cantidad</h3>
                <p>{producto.cantidad}</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/4">
                <h3 className="mb-2">Importe</h3>
                <p>{producto.importe}€</p>
            </div>
        </div>
    )
}
