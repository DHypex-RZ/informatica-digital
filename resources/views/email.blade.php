<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Recibo</title>
</head>
<body>
<h1>Número del pedido - {{ $pedido->id }}</h1>
<p>Fecha del pedido: {{ $pedido->fecha }}</p>
<p>DNI del cliente: {{ $pedido->dni }}</p>
<p>Importe total del pedido: {{ $pedido->importe_total }}€</p>
</body>
</html>
