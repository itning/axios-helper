import AbstractBuilder from "./AbstractBuilder";
import IGetData from "../requestdata/IGetData";
export default class GetBuilder extends AbstractBuilder implements IGetData {
    constructor(url: string);
}
