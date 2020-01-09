import {actionType} from "../types";

export class ButtonAction {
    public type: actionType
    public label?: string
    public uri?: string

    constructor(type?: actionType, label?: string, uri?: string) {
        this.type = type || "uri"
        this.label = label || undefined
        this.uri = uri || undefined
    }
}