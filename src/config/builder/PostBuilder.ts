import {HttpRequestMethods} from "../IConfig";
import AbstractUrlSearchAndFormDataBuilder from "./AbstractUrlSearchAndFormDataBuilder";

export default class PostBuilder extends AbstractUrlSearchAndFormDataBuilder {
    constructor(url: string) {
        super(HttpRequestMethods.POST, url);
    }
}