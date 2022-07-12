// 706
//Code by saschs
input.onButtonPressed(Button.A, function () {
    starttime = input.runningTime()
    while (true) {
        if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell)) {
            calliBot2.motor(C2Motor.links, C2Dir.vorwärts, 100)
            calliBot2.setLed(C2Motor.rechts, C2State.an)
            basic.pause(1)
            calliBot2.motorStop(C2Motor.links, C2Stop.Bremsen)
            calliBot2.setLed(C2Motor.rechts, C2State.aus)
        } else {
            if (calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.hell)) {
                calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 100)
                calliBot2.setLed(C2Motor.links, C2State.an)
                basic.pause(1)
                calliBot2.motorStop(C2Motor.rechts, C2Stop.Bremsen)
                calliBot2.setLed(C2Motor.links, C2State.aus)
            } else {
                calliBot2.motor(C2Motor.beide, C2Dir.vorwärts, 100)
                basic.pause(1)
                calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            }
        }
        if (amobjectvorbei == false && calliBot2.entfernung(C2Einheit.cm) > 25) {
            amobjectvorbei = true
        }
        if (calliBot2.entfernung(C2Einheit.cm) < 20 && amobjectvorbei == true) {
            amobjectvorbei = false
            break;
        }
    }
    music.playTone(262, music.beat(10))
    endtime = input.runningTime()
    basic.showNumber((endtime-starttime)/1000);
})
let endtime = 0
let amobjectvorbei = false
let starttime = 0
//calliBot2.entfernung(C2Einheit.cm)

