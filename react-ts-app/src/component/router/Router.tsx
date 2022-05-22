import { FC } from "react";
import { Route, Routes } from 'react-router-dom';
import { page1Routes } from "./Page1Routes";
import Home from "../Home";
import Page1Layout from "../Page1Layout";
import Page2 from "../Page2";
import Page404 from "../Page404";

const Router: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='page1' element={<Page1Layout />}>
                {page1Routes.map((route, index) => (
                    <Route key={route.path} index={route.index} path={route.path} element={route.element} />
                ))}
            </Route>
            <Route path='page2' element={<Page2 />} />
            <Route path='*' element={<Page404 />} />
        </Routes>
    )
}

export default Router