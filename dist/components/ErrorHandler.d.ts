export default interface ErrorHandler {
    getErrorClass(name: string, def: string): string;
    getErrorText(name: string): string;
}
