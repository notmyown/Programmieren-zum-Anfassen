def fussgängerAmpel(grün: bool):
    if grün:
        led.plot(4, 2)
        led.unplot(4, 1)
    else:
        led.plot(4, 1)
        led.unplot(4, 2)

def on_button_a():
    drückAmpel()
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def zeigeGelb(gedrückt: bool):
    if gedrückt:
        led.plot(4, 0)
        led.plot(0, 1)
    else:
        led.unplot(4, 0)
        led.unplot(0, 1)
def drückAmpel():
    global gelb
    if fussgänger == 0 and gelb == 0:
        gelb = 1
def autoAmpel(grün2: bool):
    if grün2:
        led.plot(0, 2)
        led.unplot(0, 0)
    else:
        led.plot(0, 0)
        led.unplot(0, 2)
gelb = 0
fussgänger = 0
grün3 = 0
grün3 += 1
fussgänger = 0
gelb = fussgänger

def on_forever():
    global gelb, fussgänger
    rot = 0
    if fussgänger == rot:
        fussgängerAmpel(False)
        autoAmpel(True)
    else:
        fussgängerAmpel(True)
        autoAmpel(False)
    if gelb == 0:
        zeigeGelb(False)
    else:
        zeigeGelb(True)
        basic.pause(2000)
        gelb = 0
        zeigeGelb(False)
        fussgänger = 1
        fussgängerAmpel(True)
        autoAmpel(False)
        basic.pause(5000)
        led.plot(0, 1)
        basic.pause(2000)
        fussgänger = 0
basic.forever(on_forever)
