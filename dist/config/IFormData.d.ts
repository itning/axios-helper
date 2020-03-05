export default interface IFormData {
    param: FormData;
    uploadProgress?: (progress: number) => void;
}
