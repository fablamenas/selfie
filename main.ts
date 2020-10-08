input.onButtonPressed(Button.A, function () {
    devices.tellCameraTo(MesCameraEvent.TakePhoto)
    basic.showLeds(`
        # # # . #
        # . # # .
        # . # . .
        # . # # .
        # # # . #
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Skull)
})
basic.showIcon(IconNames.Skull)
basic.forever(function () {
	
})
