/// <reference types="react" />
interface ImageUploadProps {
    src: string;
    onChange: (image: string) => void;
}
export default function ImageUpload(props: ImageUploadProps): JSX.Element;
export {};
