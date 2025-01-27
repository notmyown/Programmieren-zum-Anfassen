function fussgängerAmpel (grün: boolean) {
    if (grün) {
        led.plot(4, 2)
        led.unplot(4, 1)
    } else {
        led.plot(4, 1)
        led.unplot(4, 2)
    }
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    drückAmpel()
})
function zeigeGelb (gedrückt: boolean) {
    if (gedrückt) {
        led.plot(4, 0)
        led.plot(0, 1)
    } else {
        led.unplot(4, 0)
        led.unplot(0, 1)
    }
}
function drückAmpel () {
    if (fussgänger == 0 && gelb == 0) {
        gelb = 1
    }
}
function autoAmpel (grün2: boolean) {
    if (grün2) {
        led.plot(0, 2)
        led.unplot(0, 0)
    } else {
        led.plot(0, 0)
        led.unplot(0, 2)
    }
}
let gelb = 0
let fussgänger = 0
let grün3 = 0
grün3 += 1
fussgänger = 0
gelb = fussgänger
basic.forever(function () {
    let rot = 0
    if (fussgänger == rot) {
        fussgängerAmpel(false)
        autoAmpel(true)
    } else {
        fussgängerAmpel(true)
        autoAmpel(false)
    }
    if (gelb == 0) {
        zeigeGelb(false)
    } else {
        zeigeGelb(true)
        basic.pause(2000)
        gelb = 0
        zeigeGelb(false)
        fussgänger = 1
        fussgängerAmpel(true)
        autoAmpel(false)
        basic.pause(5000)
        led.plot(0, 1)
        basic.pause(2000)
        fussgänger = 0
    }
})
