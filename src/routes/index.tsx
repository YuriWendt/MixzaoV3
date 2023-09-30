import { Route, Routes } from "react-router-dom";
import { Users } from "../pages/members";
import { Home } from "../pages/home";

export function MainRoutes() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Home />} />
                <Route path="users" element={<Users />} />
            </Route>
        </Routes>
    );
}