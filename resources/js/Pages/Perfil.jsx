import Cabecera from "@/Components/Cabecera/Cabecera.jsx";
import {Head, usePage} from "@inertiajs/react";

export default function Perfil() {
    const {props} = usePage()

    return (
        <>
            <Cabecera/>
            <Head title={"Perfil - " + props.auth.user.name}/>
            <h1>Hola estas en el perfil</h1>
        </>
    )
}
