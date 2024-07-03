input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    led.stopAnimation()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("La temperatura es")
    basic.showNumber(input.temperature())
})
