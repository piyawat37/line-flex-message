import {containerDirection, containerSize, containerType} from "../types";
import {Body, Footer} from "./index";

export class Container {
    public type: containerType
    public size: containerSize
    public direction: containerDirection
    public body: Body
    public footer: Footer

    constructor(type?: containerType, size?: containerSize, direction?: containerDirection, body?: Body, footer?: Footer) {
        this.type = type || "bubble"
        this.size = size || "mega"
        this.direction = direction || "ltr"
        this.body = body || new Body()
        this.footer = footer || new Footer()
    }
}