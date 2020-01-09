import Flex from "../index";
import {blockLayoutEnum, blockTypeEnum, containerDirection, containerSizeEnum, containerTypeEnum} from "../enums";

const {FlexMessage, Contents, Elements} = Flex
const {Body, Container, Footer} = Contents
const {Box, Button, Image, Text} = Elements

test('Flex Message is Correct.', () => {
    const flexMessage = new FlexMessage();
    expect(flexMessage).toBeInstanceOf(FlexMessage);
    expect(flexMessage.type).toBe("flex");
    expect(flexMessage.altText).toBe("Message has been send.")
    expect(flexMessage.contents).toBeInstanceOf(Container)
})

test('Container Model Is Correct.', () => {
    const container = new Container("bubble", "kilo", "ltr", new Body(), new Footer())
    expect(container).toBeInstanceOf(Container)
    expect(container.body).toBeInstanceOf(Body)
    expect(container.footer).toBeInstanceOf(Footer)
    expect(container.type).toBe(containerTypeEnum.bubble)
    expect(container.size).toBe(containerSizeEnum.kilo)
    expect(container.direction).toBe(containerDirection.ltr)
})

test('Body Model Is Correct.', () => {
    const body = new Body()
    expect(body).toBeInstanceOf(Body)
    expect(body.type).toBe(blockTypeEnum.box)
    expect(body.layout).toBe(blockLayoutEnum.baseline)
    expect(body.contents.length).toBe(0)
})

test('Footer Model Is Correct.', () => {
    const footer = new Footer()
    expect(footer).toBeInstanceOf(Footer)
})

test('Box Model Is Correct.', () => {
    const box = new Box()
    expect(box).toBeInstanceOf(Box)
})

test('Button Model Is Correct.', () => {
    const button = new Button()
    expect(button).toBeInstanceOf(Button)
})

test('Image Model Is Correct.', () => {
    const image = new Image()
    expect(image).toBeInstanceOf(Image)
})

test('Text Model Is Correct.', () => {
    const text = new Text()
    expect(text).toBeInstanceOf(Text)
})