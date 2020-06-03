import React from "react";
import { RouteProps } from "react-router-dom";

export function FormTitle(props: RouteProps) {
    return (
        <h2 className="global_title">
            {props.children}
        </h2 >
    )
}