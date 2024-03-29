radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 493) {
        radio.sendNumber(11638)
    } else if (receivedNumber == 8427) {
        basic.showString("ALERT! STOLEN IDENTITY!")
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
        Received_String = receivedString
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        basic.pause(1000)
        if (receivedString == "PERSON IN ROOM!") {
            basic.showString("Comm received from your room. Accept?")
        } else {
            basic.showString("Comm received from unknown user. Accept?")
        }
        String2 = 1
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
    if (String2 >= 1) {
        if (Received_String == "PERSON IN ROOM!") {
            basic.showString("ALERT!")
        }
        basic.showString(Received_String)
        if (String2 == 3) {
            String2 = 0
        } else {
            String2 += 1
        }
    } else if (String2 == 0) {
        random_ = randint(1, 12)
        if (random_ == 1) {
            for (let index = 0; index < 4; index++) {
                music.playMelody("C E G D C5 B F A ", 120)
            }
        } else if (random_ == 2) {
            for (let index = 0; index < 4; index++) {
                music.playMelody("B A B G B F B E ", 120)
            }
        } else if (random_ == 3) {
            for (let index = 0; index < 4; index++) {
                music.playMelody("E F E D E G E C ", 120)
            }
        } else if (random_ == 4) {
            for (let index = 0; index < 4; index++) {
                music.playMelody("C A E G D F D E ", 120)
            }
        } else if (random_ == 5) {
            for (let index = 0; index < 4; index++) {
                music.playMelody("C C5 E A G F B D ", 120)
            }
        } else if (random_ == 6) {
            for (let index = 0; index < 4; index++) {
                music.playMelody("C F E A G C5 B A ", 120)
            }
        } else if (random_ == 7) {
            for (let index = 0; index < 4; index++) {
                music.playMelody("D C F E G F A G ", 120)
            }
        } else if (random_ == 8) {
            for (let index = 0; index < 4; index++) {
                music.playMelody("G D F C5 A E C B ", 120)
            }
        } else if (random_ == 9) {
            music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        } else if (random_ == 10) {
            music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
        } else if (random_ == 11) {
            for (let index = 0; index < 4; index++) {
                music.playMelody("C E G C5 G E C - ", 120)
            }
        } else if (random_ == 12) {
            for (let index = 0; index < 4; index++) {
                music.playMelody("C E F E C A C5 D ", 120)
            }
        }
    }
})
let random_ = 0
let text_list: string[] = []
let Received_String = ""
let Message = ""
let String2 = 0
let letter = 0
radio.setGroup(562)
letter = 0
String2 = 0
Message = ""
Received_String = ""
text_list = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z",
" ",
".",
"!",
"?",
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"\"",
"/",
"#",
"(",
")",
"<",
",",
">",
"+",
"-",
"=",
":",
";"
]
soundExpression.hello.play()
basic.showString("Hi, Violet!")
