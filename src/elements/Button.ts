import {ButtonAction} from "../actions";
import {buttonStyle, sizeOptions} from "../types";

export class Button {
    public type: string
    public spacing: sizeOptions
    public action: ButtonAction;
    public style: buttonStyle
    public color?: string

    constructor(
        spacing?: sizeOptions,
        action?: ButtonAction,
        style?: buttonStyle,
        color?: string
    ) {
        this.type = "button"
        this.spacing = spacing || "md"
        this.action = action || new ButtonAction()
        this.style = style || "link"
        this.color = color || undefined
    }
}