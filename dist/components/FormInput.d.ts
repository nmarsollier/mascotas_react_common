import React from "react";
import ErrorHandler from "./ErrorHandler";
interface FormInputProps {
    label: string;
    name: string;
    errorHandler: ErrorHandler;
    value?: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}
export declare function FormInput(props: FormInputProps): JSX.Element;
export {};
