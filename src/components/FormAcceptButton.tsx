import React from "react"

interface FormAcceptButtonProps {
    label: string,
    onClick: () => any
}

export function FormAcceptButton(props: FormAcceptButtonProps) {
    return (
        <button className="btn btn-primary" onClick={props.onClick}>{props.label}</button>
    )
}
