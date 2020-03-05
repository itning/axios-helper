import AbstractUrlSearchAndFormDataBuilder from "./AbstractUrlSearchAndFormDataBuilder";
import {HttpRequestMethods} from "../IConfig";

export default class PutBuilder extends AbstractUrlSearchAndFormDataBuilder {
    constructor(url: string) {
        super(HttpRequestMethods.PUT, url);
    }
}