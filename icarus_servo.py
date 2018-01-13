import RPi.GPIO as GPIOimport time

GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)
pwm = GPIO.PWM(18, 100)
pwm.start(5)

class App:

    def __init__(self):
        pass
    
    def update(self, angle)
        duty = float(angle) / 10.0 + 2.5
        pwm.ChangeDutyCycle(duty)