function WIFIR () {
    xiamiBoard.setIndexColor(1, 0xff0000)
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("ALL,ALL-OFF")
    BLUETOOTHT()
    DFRobotWiFiIoTI2C.mqttSendMessageMore("ALL SYSTEM SHUTDOWN", DFRobotWiFiIoTI2C.TOPIC.topic_0)
    WIFIT()
})
input.onButtonPressed(Button.A, function () {
	
})
xiamiBoard.IR_callbackUser(function (message) {
	
})
function BLUETOOTHT () {
    xiamiBoard.setIndexColor(0, 0x0000ff)
}
function WIFIT () {
    xiamiBoard.setIndexColor(1, 0x0000ff)
}
radio.onReceivedString(function (receivedString) {
    BLUETOOTHR()
    DFRobotWiFiIoTI2C.mqttSendMessageMore(receivedString, DFRobotWiFiIoTI2C.TOPIC.topic_0)
    WIFIT()
})
function BLUETOOTHR () {
    xiamiBoard.setIndexColor(0, 0xff0000)
}
input.onButtonPressed(Button.B, function () {
	
})
DFRobotWiFiIoTI2C.mqttCallbackUserMore(DFRobotWiFiIoTI2C.TOPIC.topic_0, function (message) {
    WIFIR()
    tampon = message.split(",")
    if (tampon[0].compare("Master") == 0) {
        if (tampon[1].compare("ALL-OFF") == 0) {
            BLUETOOTHT()
            radio.sendString("ALL,ALL-OFF")
            WIFIT()
            DFRobotWiFiIoTI2C.mqttSendMessageMore("ALL SYSTEM SHUTDOWN", DFRobotWiFiIoTI2C.TOPIC.topic_0)
        }
    } else {
        BLUETOOTHT()
        radio.sendString(message)
    }
})
let tampon: string[] = []
xiamiBoard.initXiaMiBoard()
xiamiBoard.LED(1, 0, 0)
xiamiBoard.setIndexColor(0, 0xff0000)
xiamiBoard.OLEDshowUserText("Initialisation", 0, 0)
xiamiBoard.OLEDshowUserText("Bluetooth ...", 1, 0)
radio.setGroup(1)
xiamiBoard.OLEDshowUserText("Bluetooth connecté", 1, 0)
xiamiBoard.OLEDshowUserText("Wifi ...", 2, 0)
DFRobotWiFiIoTI2C.WIFISetup("TOM-NET", "22319098")
xiamiBoard.OLEDshowUserText("Wifi Connecté", 2, 0)
xiamiBoard.LED(0, 1, 0)
xiamiBoard.OLEDshowUserText("Serveur MQTT ...", 3, 0)
DFRobotWiFiIoTI2C.mqttSetup(
"",
"",
"Master",
DFRobotWiFiIoTI2C.SERVERS.SIOT,
"192.168.3.1"
)
DFRobotWiFiIoTI2C.mqttSendMessageMore("Master is alive !", DFRobotWiFiIoTI2C.TOPIC.topic_0)
xiamiBoard.OLEDshowUserText("Serveur MQTT Connecté", 3, 0)
xiamiBoard.ledBlank()
xiamiBoard.OLEDclear()
xiamiBoard.LED(0, 0, 1)
basic.forever(function () {
    xiamiBoard.ledBlank()
})
