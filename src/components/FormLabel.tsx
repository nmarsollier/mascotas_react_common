
interface FormLabelProps {
    label: string,
    text: string | undefined
}

export function FormLabel(props: FormLabelProps) {
    return (
        <div className="form-group">
            <label>params.label</label>
            <input className="form-control" id="login" value={props.text} disabled />
        </div>
    )
}