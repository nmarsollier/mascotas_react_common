import React from "react"

interface FormButtonProps {
    label: string,
    onClick: () => any
}

export function FormButton(props: FormButtonProps) {
    return (
        <button className="btn btn-light" onClick={props.onClick}>{props.label}</button>
    )
}
