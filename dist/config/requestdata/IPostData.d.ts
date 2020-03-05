import IFormParamType from "../IFormParamType";
import AbstractBuilder from "../builder/AbstractBuilder";
import IUrlSearchParamType from "../IUrlSearchParamType";
export default interface IPostData {
    withFormData(params: IFormParamType, uploadProgress?: (progress: number) => void): AbstractBuilder;
    withURLSearchParams(params: IUrlSearchParamType): AbstractBuilder;
}
