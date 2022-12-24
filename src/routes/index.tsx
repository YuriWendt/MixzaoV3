import { Route, Routes } from "react-router-dom";
import { Users } from "../pages/members";

export function MainRoutes() {
    return (
        <Routes>
            <Route>
                <Route path="users" element={<Users />} />
                {/* <Route path="companies" element={<Companies />} />
            <Route path="change-company-password/:id" element={<ChangePasswordForm />} />
            <Route path="new-company" element={<CompanyForm />} />
            <Route path="company-panel/:id" element={<CompanyPanel />} />
            <Route path="setup" element={<Setup />} />
        <Route path="company-limits/:companyId" element={<CompanyLimits />} /> */}
            </Route>
        </Routes>
    )
}