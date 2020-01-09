import {ButtonAction} from "../actions";
import {buttonStyle, sizeOptions} from "../types";

export class Button {
    public type: string
    public action: ButtonAction;
    public style: buttonStyle
    public color?: string

    constructor(
        action?: ButtonAction,
        style?: buttonStyle,
        color?: string
    ) {
        this.type = "button"
        this.action = action || new ButtonAction()
        this.style = style || "link"
        this.color = color || undefined
    }
}