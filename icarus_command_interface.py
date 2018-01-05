#!/usr/bin/python3

import icarus_gimbal as adt
import time
from pygame import mixer

""" 
This is the command interface. Connects to the gimbal
"""

class Command():
    def __init__(self):
        """ 
        Create an instance of the drive train connection
        """

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

    def goHome(self):
        """
        Return back into docking position
        """

    def lock(self):
        """
        Redo the lock
        """
