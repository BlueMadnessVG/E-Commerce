import React from "react";
import Home from "../Home/Home";

export { Home }

// IMPORT THE PAGES AND ADD LAZY LOADER TO ONLY THE NEEDED CODE
export const Catalog = React.lazy(() => import('../Products/Catalog/Catalog'));
export const Preview = React.lazy(() => import('../Products/Preview/Preview'));
export const ShopCar = React.lazy(() => import('../Shop/ShopCart'))