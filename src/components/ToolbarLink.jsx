import React from 'react';
import { NavLink } from "react-router-dom";

function ToolbarLink({ children, ...rest }) {
    return <NavLink className="mdc-tab" activeClassName="mdc-tab--active" {...rest}>{children}</NavLink>;
}

export default ToolbarLink;