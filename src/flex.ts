import {
    actionType,
    blockLayout,
    blockType,
    buttonStyle,
    containerDirection,
    containerSize,
    containerType,
    size,
    weight
} from './constant'

export namespace FlexMessage {
    export class Container {
        type: containerType
        size: containerSize
        direction: containerDirection
        body: Body
        footer: Footer

        constructor() {
            this.type = "bubble"
            this.size = "mega"
            this.direction = "ltr"
            this.body = new Body()
            this.footer = new Footer()
        }
    }

    type ReturnType<T> =
        T extends (...args: any[]) => infer R
            ? R
            : any;
    type A = ReturnType<() => string>

    // type contents
    export class Body {
        type: blockType
        layout: blockLayout
        contents: Array<Text | Box | Button | Image>

        constructor() {
            this.type = "box"
            this.layout = "baseline"
            this.contents = []
        }
    }

    export class Footer {

    }

    export class Text {
        type: string
        text?: string
        size: size
        weight: weight

        constructor() {
            this.type = "text"
            this.size = "none"
            this.weight = "regular"
        }
    }

    export class Box {
        type: string
        layout: blockLayout
        spacer: size
        contents: Array<Text | Box | Button | Image>

        constructor() {
            this.type = "box"
            this.layout = "baseline"
            this.spacer = "md"
            this.contents = []
        }
    }

    export class Button {
        type: string
        spacer: size
        action: Action
        style: buttonStyle
        color?: string

        constructor() {
            this.type = "button"
            this.spacer = "md"
            this.action = new Action()
            this.style = "link"
        }
    }

    export class Image {
    }

    export class Action {
        type: actionType = "uri"
        label?: string
        uri?: string
    }
}
