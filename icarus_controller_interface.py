#!/usr/bin/python3
 
import icarus_state_machine as istm
import icarus_alexa_interface as pii
import time

"""
This is the main, establishes checker and updates the state machine 
"""

# starts the Alexa/Firebase connection
icarus_alexa = pii.Alexa()
icarus_state = istm.StateMachine(icarus_alexa._state)

while(1):
    # polls the update_state and starts events
    status = icarus_alexa.update_state()
    icarus_state.on_event(status)

