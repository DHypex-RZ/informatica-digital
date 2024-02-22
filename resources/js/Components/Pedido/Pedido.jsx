import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";

export default function Pedido({pedido}) {
    return (
        <Card fullWidth={true} className="bg-gray-50 my-2">
            <CardHeader>
                <h1>Nº de pedido - {pedido.id}</h1>
            </CardHeader>
            <CardBody>
                <p>Fecha del pedido: {pedido.fecha}</p>
            </CardBody>
            <CardFooter>
                <p>Importe total del pedido: {pedido.importe_total}€</p>
            </CardFooter>
        </Card>
    )
}
