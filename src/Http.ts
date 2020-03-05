import GetBuilder from "./config/builder/GetBuilder";
import PostBuilder from "./config/builder/PostBuilder";
import PatchBuilder from "./config/builder/PatchBuilder";
import DeleteBuilder from "./config/builder/DeleteBuilder";
import PutBuilder from "./config/builder/PutBuilder";

export default class Http {
    static Get(url: string) {
        return new GetBuilder(url);
    }

    static Post(url: string) {
        return new PostBuilder(url);
    }

    static Delete(url: string) {
        return new DeleteBuilder(url);
    }

    static Patch(url: string) {
        return new PatchBuilder(url);
    }

    static Put(url: string) {
        return new PutBuilder(url);
    }
}
