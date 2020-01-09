import {sizeOptions, weightOptions} from "../types";

export class Text {
    public type: string
    public text?: string
    public size: sizeOptions
    public weight: weightOptions

    constructor(
        text?: string,
        size?: sizeOptions,
        weight?: weightOptions
    ) {
        this.type = "text"
        this.text = text || undefined
        this.size = size || "none"
        this.weight = weight || "regular"
    }
}