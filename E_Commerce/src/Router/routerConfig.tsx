import { Catalog, Home, Preview, ShopCar } from "../components/Pages/Index";

export const routes = [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/',
        element: <Catalog />
    },
    {
        path: '/preview/:id',
        element: <Preview />
    },
    {
        path: '/ShopCart',
        element: <ShopCar />
    }
]