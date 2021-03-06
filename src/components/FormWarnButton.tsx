import React from "react"

interface FormWarnButtonProps {
    label: string,
    hidden: boolean,
    onClick: () => any
}

export function FormWarnButton(props: FormWarnButtonProps) {
    return (
        <button hidden={props.hidden} className="btn btn-warning" onClick={props.onClick}>{props.label}</button>
    )
}
