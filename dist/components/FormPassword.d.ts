import React from "react";
import ErrorHandler from "./ErrorHandler";
interface FormPasswordProps {
    label: string;
    name: string;
    errorHandler: ErrorHandler;
    value?: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}
export declare function FormPassword(props: FormPasswordProps): JSX.Element;
export {};
