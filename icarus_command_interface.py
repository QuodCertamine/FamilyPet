#!/usr/bin/python3

import icarus_turrent as itc
import time
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
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(18, GPIO.OUT)

    def start(self):
        """
        Exit Standby mode
        """


    def stop(self):
        """
        Stops whatever current function is happening,
        enable standby mode
        """

    def cleanUp(self):
        """
        Undo the lock, Rotate out into firing position
        Uses OpenCV to locate where individuals are and then automatically begins the onslaught
        aka firing
        """
        pwm = GPIO.PWM(18, 100)
        pwm.start(5)

    def goHome(self):
        """
        Return back into docking position
        """
        pwm = GPIO.PWM(18, 115)
        pwm.start(5)

    def lock(self):
        """
        Redo the lock
        """
