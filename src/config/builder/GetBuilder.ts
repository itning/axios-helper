import AbstractBuilder from "./AbstractBuilder";
import {HttpRequestMethods} from "../IConfig";
import IGetData from "../requestdata/IGetData";

export default class GetBuilder extends AbstractBuilder implements IGetData {
    constructor(url: string) {
        super(HttpRequestMethods.GET, url);
    }
}