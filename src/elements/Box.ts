import {blockLayout, sizeOptions} from "../types";
import {Button} from "./Button";
import {Image} from "./Image";
import {Text} from "./Text";

export class Box {
    public type: string
    public layout: blockLayout
    public spacing: sizeOptions
    public contents: Array<Text | Box | Button | Image>

    constructor(
        layout?: blockLayout,
        spacing?: sizeOptions,
        contents?: Array<Text | Box | Button | Image>
    ) {
        this.type = "box"
        this.layout = layout || "baseline"
        this.spacing = spacing || "md"
        this.contents = contents || []
    }
}