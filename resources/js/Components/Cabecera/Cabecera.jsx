import {Button, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {Link, router, usePage} from "@inertiajs/react";

export default function Cabecera() {
    const {props} = usePage()
    return (
        <Navbar maxWidth={"xl"}>
            <NavbarBrand>
                <h1 className="text-4xl cursor-default">Informática Digital</h1>
            </NavbarBrand>
            <NavbarContent justify={"center"}>
                <NavbarItem>
                    <Link href={route("inicio")}>Inicio</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={route("carrito")}>Carrito</Link>
                </NavbarItem>
                {props.auth.user != null ? (
                    <>
                        <NavbarItem>
                            <Link href={route("perfil")}>Perfil</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Button color={"danger"} variant={"flat"} onClick={() => {
                                router.post(route("cerrar.sesion"))
                            }}>
                                Cerrar sesión
                            </Button>
                        </NavbarItem>
                    </>

                ) : (
                    <>
                        <NavbarItem>
                            <Button color={"primary"} as={Link} href={route("iniciar.sesion")}>
                                Iniciar sesión
                            </Button>
                        </NavbarItem>
                        <NavbarItem>
                            <Button color={"default"} as={Link} href={route("registrar")}>
                                Registrarse
                            </Button>
                        </NavbarItem>
                    </>
                )}

            </NavbarContent>
        </Navbar>
    )
}
