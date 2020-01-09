import {ButtonAction} from "./actions";
import {Body, Container, Footer} from "./contents";
import {Box, Button, Image, Text} from "./elements";

class FlexMessage {
    public type: string
    public altText: string
    public contents: Container

    constructor() {
        this.type = "flex"
        this.altText = "Message has been send."
        this.contents = new Container()
    }
}


export const Flex = {
    Actions: {ButtonAction},
    Contents: {Body, Container, Footer},
    Elements: {Box, Button, Image, Text},
    FlexMessage
}

