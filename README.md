# Project Icarus
Home Defense System using Alexa enabled triggers, OpenCV target finding, and a really cool nerf gun.</br>
Click the image below to watch the video. </br>
[![Watch the video](https://github.com/QuodCertamine/Project-Icarus/blob/Atom/img/youtube.png)](https://www.youtube.com/watch?v=nAbe4CN_NfY&list=PLm2pid0RY5dEpCS_2eUWyErOQre9ZqB6Z)

## HUGE SHOUTOUT
<b>Huge shoutout</b> to my fellow hackers over at <a href="https://github.com/HackerHouseYT/Tracking-Turret">HackerHouse</a> for putting together this original project with an airsoft and giving me the idea to grow on it.
</br>
<img src="https://cdn.instructables.com/F6V/NW4E/IW6PF2TR/F6VNW4EIW6PF2TR.MEDIUM.jpg"/> </br>

Table of Contents
============
* [Instructions](#instructions)
* [Software Install](#software-install)
* [Alexa Integration](#alexa-integration)
* [Running](#running)
* [Model](#model)
* [License](#license)

Instructions
============
The full set of instructions for the hardware build can be found on <a href="https://www.hackster.io/quodcertamine/nerf-alexa-home-defense-turrent-a50dd1" target="__blank">Hackster.io!<a/>


Software install
============
To get the Raspberry Pi up and running we need to install the necessary libraries

```bash
pip install python-firebase
pip install requests
sudo pip install git+https://github.com/adafruit/Adafruit-Motor-HAT-Python-Library
```

Setup I2C on your Raspberry Pi: </br>
https://learn.adafruit.com/adafruits-raspberry-pi-lesson-4-gpio-setup/configuring-i2c
</br>
Install OpenCV 3. Follow all steps for python 2.7 instructions

http://www.pyimagesearch.com/2016/04/18/install-guide-raspberry-pi-3-raspbian-jessie-opencv-3/

Make sure to create your virtual environment with the extra flag.

```bash
mkvirtualenv cv --system-site-packages -p python2
```

Source your bash profile

```bash
source ~/.profile
```

Activate your virtual environment
```
workon cv
```

Now you are ready to clone the repo on the Raspberry Pi </br>
```bash
cd ~
git clone https://github.com/QuodCertamine/Project-Icarus
```

Then follow the following instructions to take the icarus.service file and enable it with systemd </br>
https://www.raspberrypi-spy.co.uk/2015/10/how-to-autorun-a-python-script-on-boot-using-systemd/
</br>

After setting up the service file your Raspberry Pi should automatically start Project Icarus on boot.

Alexa Integration
============
Go to the alexa directory and install node dependencies.
```bash
cd alexa-icarus
npm install
```

Go to firebase and set up a firebase application. Follow <a href="https://firebase.google.com/docs/admin/setup" target="__blank">these instructions</a> to obtain your firebase-admin service account key </br>
Save the downloaded file to serviceAccountKey.json in the alexa-icarus folder of this project </br>
Save all items in the folder as a .zip file.

Follow the following instructions from Amazon to set up your own Lambda service and nodejs skill:</br>
https://developer.amazon.com/alexa-skills-kit/alexa-skill-quick-start-tutorial </br>
Load the .zip file into your lambda service </br>

Add the following command configurations to your Alexa skill in the Alexa skill developer portal </br>

You also have to create a config.json file for the python authentication of firebase </br>
config.json </br>
```bash 
{
    secret: "",
    email: "email@gmail.com"
}
```
## Different Alexa Commands Supported:
"Alexa launch Project Icarus" </br>
"Activate defense protocol alpha" </br>
"Activate security" </br>
"Protect me" </br>
"Activate defense protocol beta" </br>
"Lock" </br>
"Stop" </br>

Running
============
Start the controller interface, which is basically a while loop that runs the finite state machine and deals with the firebase reads.

```bash
python3 icarus_controller_interface.py
```

Model
============
![3DModel-1](https://github.com/QuodCertamine/Project-Icarus/blob/Atom/models/fullimage-1.png)

![3DModel-2](https://github.com/QuodCertamine/Project-Icarus/blob/Atom/models/fullimage-2.png) </br>

License
============
The MIT License

Copyright (c) 2004-2018 Quod Certamine

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
