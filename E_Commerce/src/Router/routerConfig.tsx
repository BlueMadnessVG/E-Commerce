import { Catalog, Home } from "../components/Pages/Index";

export const routes = [
    {
        path: '',
        element: <Home />
    },
    {
        path: '/catalog',
        element: <Catalog />
    },
    {
        path: '/preview',
        element: <Catalog />
    }
]