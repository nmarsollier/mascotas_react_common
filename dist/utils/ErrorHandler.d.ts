import { ApiError } from "./ApiError";
declare class ErrorHandler {
    constructor(forceUpdate: () => any);
    private forceUpdate;
    errorMessage?: string;
    errors: Map<string, string>;
    processRestValidations(data: ApiError): void;
    addError(component: string, message: string): void;
    cleanRestValidations(): void;
    getErrorText(item: string): string | undefined;
    getErrorClass(component: string, baseClass: string): string;
    hasErrors(): boolean;
}
declare function useErrorHandler(): ErrorHandler;
export { ErrorHandler, useErrorHandler };
