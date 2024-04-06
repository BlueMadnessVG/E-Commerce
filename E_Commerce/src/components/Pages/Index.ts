import React from "react";
import Home from "../Home/Home";

export { Home }

export const Catalog = React.lazy(() => import('../Products/Catalog/Catalog'));
export const Preview = React.lazy(() => import('../Products/Preview/Preview'));