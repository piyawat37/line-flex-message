import {Box, Button, Image} from "../elements";
import {blockLayout, blockType} from "../types";

export class Body {
    public type: blockType
    public layout: blockLayout
    public contents: Array<Text | Box | Button | Image>

    constructor(type?: blockType, layout?: blockLayout, contents?: Array<Text | Box | Button | Image>) {
        this.type = type || "box"
        this.layout = layout || "baseline"
        this.contents = contents || []
    }
}
