import AbstractBuilder from "./AbstractBuilder";
import IFormParamType from "../IFormParamType";
import IUrlSearchParamType from "../IUrlSearchParamType";
import IPostData from "../requestdata/IPostData";
import IDeleteData from "../requestdata/IDeleteData";
import IPutData from "../requestdata/IPutData";
export default abstract class AbstractUrlSearchAndFormDataBuilder extends AbstractBuilder implements IPostData, IDeleteData, IPutData {
    withFormData(params: IFormParamType, uploadProgress?: (progress: number) => void): this;
    withURLSearchParams(params: IUrlSearchParamType): this;
}
