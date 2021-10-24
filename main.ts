radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -1) {
        basic.showIcon(IconNames.Yes)
    } else {
    	
    }
})
input.onSound(DetectedSound.Loud, function () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
basic.showIcon(IconNames.Heart)
radio.setGroup(84)
basic.forever(function () {
    radio.sendNumber(0)
})
