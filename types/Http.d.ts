import GetBuilder from "./config/builder/GetBuilder";
import PostBuilder from "./config/builder/PostBuilder";
import PatchBuilder from "./config/builder/PatchBuilder";
import DeleteBuilder from "./config/builder/DeleteBuilder";
import PutBuilder from "./config/builder/PutBuilder";
export default class Http {
    static Get(url: string): GetBuilder;
    static Post(url: string): PostBuilder;
    static Delete(url: string): DeleteBuilder;
    static Patch(url: string): PatchBuilder;
    static Put(url: string): PutBuilder;
    static Download(url: string, fileName: (fileName: any) => string): void;
}
