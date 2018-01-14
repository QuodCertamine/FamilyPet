import icarus_turrent as itc
from pygame import mixer
import RPi.GPIO as GPIO

""" 
This is the command interface. Connects to the gimbal
"""

class Command():
    def __init__(self):
        """ 
        Create an instance of the drive train connection
        """
        self._turrent = itc.Turret(friendly_mode=False)
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(18, GPIO.OUT)
        self._pwm = GPIO.PWM(18,100)
        self._pwm.start(14)
        self._flag = True

    def start(self):
        """
        Exit Standby mode
        """
        if(self._flag == False){
            GPIO.setmode(GPIO.BCM)
            GPIO.setup(18, GPIO.OUT)
            self._pwm = GPIO.PWM(18,100)
            self._pwm.start(14)
            self._flag = True
        }

    def stop(self):
        """
        Stops whatever current function is happening,
        enable standby mode
        """
        GPIO.cleanup()

    def cleanUp(self):
        """
        Undo the lock, Rotate out into firing position
        Uses OpenCV to locate where individuals are and then automatically begins the onslaught
        aka firing
        """
        self._pwm.ChangeDutyCycle(22)
        self._turrent.calibrate()
        self._turrent.motion_detection()

    def goHome(self):
        """
        Return back into docking position
        """
        self._turrent.home()
        self._flag = False

    def lock(self):
        """
        Redo the lock
        """
        self._pwm.ChangeDutyCycle(14)
