import React from "react";
import ErrorHandler from "./ErrorHandler";
import { ErrorLabel } from "./ErrorLabel";

interface FormPasswordProps {
    label: string,
    name: string,
    errorHandler: ErrorHandler,
    value?: string | undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
}

export function FormPassword(props: FormPasswordProps) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input id={props.name} type="password"
                value={props.value}
                onChange={props.onChange}
                className={props.errorHandler.getErrorClass(props.name, "form-control")}>
            </input>
            <ErrorLabel message={props.errorHandler.getErrorText(props.name)} />
        </div>
    )
}