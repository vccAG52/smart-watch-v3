radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 493) {
        radio.sendNumber(8427)
    } else if (receivedNumber == 8427) {
        basic.showString("ALERT! STOLEN IDENTITY!")
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            soundExpression.sad.playUntilDone()
        }
    } else if (receivedNumber == 11638) {
        soundExpression.giggle.play()
        basic.showString("Cipriano, Coralyn")
        basic.showString("ID# 11638")
        basic.showString("Birth Date: May 30th, 2013")
        basic.showString("Parents: Rose and Michael")
    } else {
        soundExpression.mysterious.play()
        basic.showString("ID# " + receivedNumber + " is not a registered ID.")
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendString(Message)
    soundExpression.spring.play()
    Message = ""
})
input.onButtonPressed(Button.A, function () {
    if (letter > 0) {
        letter += -1
    } else {
        letter = 52
    }
    basic.showString("" + (text_list[letter]))
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(493)
})
input.onButtonPressed(Button.AB, function () {
    Message = "" + Message + text_list[letter]
    basic.showString(Message)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString != "") {
        soundExpression.twinkle.play()
        Received_String = receivedString
        basic.pause(1000)
        if (receivedString == "PERSON IN ROOM!") {
            basic.showString("Comm received from your room. Accept?")
        } else {
            basic.showString("Comm received from unknown user. Accept?")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (letter < 52) {
        letter += 1
    } else {
        letter = 0
    }
    basic.showString("" + (text_list[letter]))
})
input.onGesture(Gesture.Shake, function () {
    Message = ""
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Received_String == "PERSON IN ROOM!") {
        basic.showString("ALERT!")
    }
    basic.showString(Received_String)
})
let text_list: string[] = []
let Received_String = ""
let Message = ""
let letter = 0
radio.setGroup(562)
letter = 0
Message = ""
Received_String = ""
text_list = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", ".", "!", "?", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "\"", "/", "#", "(", ")", "<", ",", ">", "+", "-", "=", ":", ";"]
basic.showString("Hi, Violet!")
soundExpression.hello.play()
