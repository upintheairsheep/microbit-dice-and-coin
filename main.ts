input.onButtonPressed(Button.A, function () {
    music.playMelody("C - C C C C C C ", 222)
    basic.showNumber(randint(1, 6))
})
input.onGesture(Gesture.ScreenDown, function () {
    music.playMelody("C D E D C E G E ", 222)
    basic.showNumber(randint(1, 2))
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C D E D C E G E ", 222)
    basic.showNumber(randint(1, 2))
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C - C C C C C C ", 222)
    basic.showNumber(randint(1, 6))
})
basic.showNumber(0)
basic.forever(function () {
	
})
