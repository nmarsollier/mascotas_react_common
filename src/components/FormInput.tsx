import React from "react"
import ErrorLabel from "./ErrorLabel";
import ErrorHandler from "./ErrorHandler";

interface FormInputProps {
    label: string,
    name: string,
    errorHandler: ErrorHandler,
    value?: string | undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
}

export default function FormInput(props: FormInputProps) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input id={props.name}
                type="text"
                value={props.value}
                onChange={props.onChange}
                className={props.errorHandler.getErrorClass(props.name, "form-control")}>
            </input>
            <ErrorLabel message={props.errorHandler.getErrorText(props.name)} />
        </div>
    )
}