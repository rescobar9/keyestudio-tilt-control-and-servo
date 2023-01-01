basic.clearScreen()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.servoWritePin(AnalogPin.P1, 90)
    } else {
        pins.servoWritePin(AnalogPin.P1, 0)
    }
})
