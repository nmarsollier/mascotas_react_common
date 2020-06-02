import React from "react";
import ErrorHandler from "./ErrorHandler";
interface FormPasswordProps {
    label: string;
    name: string;
    errorHandler: ErrorHandler;
    value?: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}
export default function FormPassword(props: FormPasswordProps): JSX.Element;
export {};
