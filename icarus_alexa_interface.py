from firebase import firebase
from time import gmtime, strftime, localtime
import json

"""
This is the Alexa Interface, updates state and controls database access
"""

class Alexa():
        def __init__(self, location=None, user=None, command='standby'):
    	    # initialize Firebase Application connection
            with open('config.json', 'r') as f:
                config = json.load(f)
            self._authentication = firebase.FirebaseAuthentication(config["secret"], config["email"], True, True)
            self._fb = firebase.FirebaseApplication("https://proj-icarus.firebaseio.com", self._authentication)
		
            # Post Initial State
            time = strftime("%Y-%m-%d %H:%M:%S", gmtime())
            data = {'command':command, 'location':location, 'timestamp':time ,'user':user}
            result = self._fb.patch("/status", data)
            self._state = data
		
        def update_state(self):
            # Look at the database to see if there have been any changes
            self._state = self._fb.get('/status', None)
            return self._state
