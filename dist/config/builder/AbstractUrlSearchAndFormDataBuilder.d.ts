import AbstractBuilder from "./AbstractBuilder";
import IFormParamType from "../IFormParamType";
import IUrlSearchParamType from "../IUrlSearchParamType";
import IPostData from "../requestdata/IPostData";
import IDeleteData from "../requestdata/IDeleteData";
export default abstract class AbstractUrlSearchAndFormDataBuilder extends AbstractBuilder implements IPostData, IDeleteData {
    withFormData(params: IFormParamType, uploadProgress?: (progress: number) => void): AbstractBuilder;
    withURLSearchParams(params: IUrlSearchParamType): AbstractBuilder;
}
