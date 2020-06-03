import React from "react";
import { RouteProps } from "react-router-dom";

export function Form(props: RouteProps) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {props.children}
        </form >
    )
}