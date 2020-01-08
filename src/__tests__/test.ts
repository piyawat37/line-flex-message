import {FlexMessage, Greeter} from "../index";

test('My Greeter', () => {
    expect(Greeter('Carl')).toBe('Hello Carl');
});

test('FlexMessage', () => {
    const flexMessage = new FlexMessage.Container()
    flexMessage.body = new FlexMessage.Body()
    console.log(flexMessage)
    expect(flexMessage.type).toBe('bubble')
})