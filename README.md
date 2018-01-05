# Project Icarus
Home Defense System using Alexa enabled triggers, OpenCV camera locking, and a really cool nerf gun.</br>
Click the image below to watch the video. </br>
[![Watch the video](https://github.com/QuodCertamine/Project-Icarus/blob/master/img/youtube.png)](https://youtu.be/fzvNv4QeY4A)

## Table of Contents:
Instructions
Necessary Hardware
Hardware Build Instructions
Software Install Instructions
Alexa Integration
Copyright and Licensing

## Instructions:
*** TODO: Intro instructions *** </br>

### Necessary Hardware:
*** TODO: Links for all the hardware *** </br>
1x <a href="https://www.adafruit.com/product/3055" target="__blank">Raspberry Pi 3</a></br>
1x <a href="https://www.amazon.com/gp/product/B00TIY5JM8/ref=oh_aui_detailpage_o08_s00?ie=UTF8&psc=1" target="__blank">Adafruit Motor Hat for Raspberry Pi</a></br>
1x <a href="https://www.amazon.com/gp/product/B011EBSKK0/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1" target="__blank">DC 5-12V Buck Boost Converter</a></br>
2x <a target="__blank">Nema 17 Stepper Motor 5:1</a></br>
4x <a target="__blank">5-8" expansion Springs</a></br>
1x <a target="__blank">Roll of Nylon String</a></br>
4x <a target="__blank">Eye Hook</a></br>
1x <a target="__blank">Endspot Button</a></br>
1x <a target="__blank">Relay</a></br>
1x <a target="__blank">Lazer</a></br>
1x <a target="__blank">720p Camera</a></br>
1x <a target="__blank">MG890 Servo</a></br>
1x <a target="__blank">Lock</a></br>
1x <a target="__blank">Nerf blaster</a></br>
5x <a target="__blank">180 degree Hinge</a></br>
2x <a target="__blank">90 degree brace</a></br>
1x <a target="__blank">Memory Foam</a></br>
1x <a target="__blank">Power Bank</a></br>
1x <a target="__blank">Amazon Echo/Dot</a></br>
2x <a target="__blank">Mounting Triangles </a></br>
<b>Wood:</b> </br>
1/4th inch wood</br>
1/2 inch wood</br>
Screws: </br>
*** TODO: Length of Screws *** </br>

<b>3D Printable files:</b> </br>
2x <a target="__blank">Stepper Motor Flang</a></br>
1x <a target="__blank">Rolling Flange</a></br>
4x <a target="__blank">Dampener</a></br>
1x <a target="__blank">Gimbal Endspot Guide</a></br>
5x <a target="__blank">Wire Guide</a></br>
1x <a target="__blank">Raspberry Pi 3 Container</a></br>
Optional: Spraypaint </br>

### Hardware Instructions

*** TODO: Hardware Instructions *** </br>

</br>
Power the Raspberry Pi with any 5V supply and power the Motor Hat either using a 12V supply or a 5V supply and the 5-12V Buck Boost Converter. Now you are ready to install the necessary software

### Software Instructions
To get the Raspberry Pi up and running we need to install the necessary libraries

```bash
python3 -m pip install python-firebase
python3 -m pip install requests
sudo python 3 -m pip install git+https://github.com/adafruit/Adafruit-Motor-HAT-Python-Library
```

Setup I2C on your Raspberry Pi: </br>
https://learn.adafruit.com/adafruits-raspberry-pi-lesson-4-gpio-setup/configuring-i2c
</br>

Now you are ready to clone the repo on the Raspberry Pi </br>
```bash
cd ~
git clone https://github.com/QuodCertamine/Project-Icarus
```
*** TODO: OpenCV Install instructions *** </br>

Then follow the following instructions to take the icarus.service file and enable it with systemd </br>
https://www.raspberrypi-spy.co.uk/2015/10/how-to-autorun-a-python-script-on-boot-using-systemd/
</br>

After setting up the service file your Raspberry Pi should automatically start Project Icarus on boot.

### Alexa Installation
*** TODO: *** </br>
Install node dependencies
```bash
cd alexa-icarus
npm install
```

Go to firebase and set up a firebase application. Get config data from firebase and save it as config.json </br>

```bash 
config = {
    apiKey: "{api-key}",
    authDomain: "{app-id}.firebaseapp.com",
    databaseURL: "https://{app-id}.firebaseio.com",
    projectId: "{app-id}",
    storageBucket: "{app-id}.appspot.com",
    messagingSenderId: ""
  }
```

Package everything in the alexa-icarus directory as a .zip file and store it in your Amazon Lambda service
*** TODO: include instructions on how to set up Amazon Lamda service *** </br>

## Running
```bash
python3 icarus_controller_interface.py
```

## Different Alexa Commands Supported:
"Alexa launch Project Icarus" </br>
"Clean up" </br>
"Lock" </br>
"Stop" </br>

## 3D Model
*** TODO: include 3D Model *** </br>
![3DModel](https://github.com/QuodCertamine/Project-Icarus/blob/master/models/3DModel.png)

# Copyright and Licensing
The MIT License

Copyright (c) 2004-2017 Quod Certamine

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