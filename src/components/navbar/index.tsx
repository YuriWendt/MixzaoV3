import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../global/grid";
import { theme } from "../../global/theme";
import { Icon } from "../icon";
import { Content, Link, Links, Separator } from "./style";

type RouteType = {
   name: string,
   path: string,
   subRoutes?: boolean,
   component?: React.ReactNode
}

export function Navbar() {
    const navigate = useNavigate();
    const [routes, setRoutes] = useState<RouteType[]>([]);
    const [builtRoutes, setBuiltRoutes] = useState(false);

    function buildRoutes() {
        let build: RouteType[] = [
            {
                name: "Início",
                path: "/",
            },
            {
                name: "Membros",
                path: "/users",
            },
        ];

        setRoutes(build);
        console.log(routes);
        setBuiltRoutes(true);
    }

    function redirect(path: string) {
        navigate(path);
    }

    useEffect(() => {
        buildRoutes();
    }, []);

    return (
        <>
            <Container>
                <Content>
                    <Icon src={theme.img.logo} width="100px" height="100px" />
                    <Links>
                        {routes.map((route, index) => {
                            return (
                                <Link key={index}onClick={() => redirect(route.path)}> {route.name} </Link>
                            );
                        })}
                    </Links>
                </Content>
            </Container >
            <Separator />
        </>
    );
}