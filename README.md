# Project Icarus
Home Defense System using Alexa enabled triggers, OpenCV target finding, and a really cool nerf gun.</br>
Click the image below to watch the video. </br>
[![Watch the video](https://github.com/QuodCertamine/Project-Icarus/blob/master/img/youtube.png)](https://youtu.be/fzvNv4QeY4A)

## HUGE SHOUTOUT
<b>Huge shoutout</b> to my fellow hackers over at <a href="https://github.com/HackerHouseYT/Tracking-Turret">HackerHouse</a> for putting together this original project with an airsoft and giving me the idea to grow on it.
</br>
<img src="https://cdn.instructables.com/F6V/NW4E/IW6PF2TR/F6VNW4EIW6PF2TR.MEDIUM.jpg"/> </br>

Table of Contents
============
* [Instructions](#instructions)
* [Necessary Hardware](#necessary-hardware)
* [Hardware Build](#hardware-build)
* [Software Install](#software-install)
* [Alexa Integration](#alexa-integration)
* [Running](#running)
* [Model](#model)
* [License](#license)

Instructions
============
These instructions are broken up into multiple sections in order to talk about the hardware build for the Box, The Gimbal, and necessary turrent motifications.

Necessary Hardware
============

1x <a href="https://www.adafruit.com/product/3055" target="__blank">Raspberry Pi 3</a></br>
1x <a href="https://www.amazon.com/gp/product/B00TIY5JM8/ref=oh_aui_detailpage_o08_s00?ie=UTF8&psc=1" target="__blank">Adafruit Motor Hat for Raspberry Pi</a></br>
2x <a href="https://www.amazon.com/gp/product/B00WATUFIG/ref=oh_aui_detailpage_o09_s02?ie=UTF8&psc=1" target="__blank">Nema 17 Stepper Motor 5:1</a></br>
4x <a href="https://www.grainger.com/category/extension-springs/springs/hardware/ecatalog/N-mgb" target="__blank">4-6" extension Springs</a></br> 
1x <a href="https://www.homedepot.com/p/Bon-Tool-350-ft-Yellow-Twisted-Nylon-Line-15-11-132/302556746" target="__blank">Roll of Nylon String</a></br>
4x <a href="https://www.homedepot.com/p/Everbilt-212-x-65-lb-Zinc-Plated-Threaded-Eye-Hook-100-Pack-803252/204273857" target="__blank">Eye Hook</a></br>
2x <a href="https://www.amazon.com/WINGONEER-KY-019-Channel-Module-arduino/dp/B06XHJ2PBJ/ref=sr_1_3?ie=UTF8&qid=1516285179&sr=8-3&keywords=5v+relay+arduino" target="__blank">5V Relay</a></br>
1x <a href="https://www.amazon.com/gp/product/B01DRJXAWA/ref=oh_aui_detailpage_o04_s00?ie=UTF8&psc=1" target="__blank">720p Camera</a></br>
1x <a href="https://www.amazon.com/MG995-Metal-Speed-Torque-Digital/dp/B01N4QD32E/ref=sr_1_5?s=toys-and-games&ie=UTF8&qid=1516285488&sr=1-5&keywords=servo" target="__blank">MG995 Servo</a></br>
1x <a href="https://www.homedepot.com/p/Ajustlock-3-in-Zinc-Plated-Self-Adjustable-Barrel-Bolt-Lock-205/206495640" target="__blank">Barrel Bolt Lock</a></br>
1x <a href="" target="__blank">Nerf Vulcan Blaster with Lazer Attachment</a></br>
5x <a href="https://www.homedepot.com/p/Everbilt-1-in-Zinc-Plated-Non-Removable-Pin-Narrow-Utility-Hinges-2-Pack-15161/202034166" target="__blank">360 degree Hinge</a></br>
2x <a href="" target="__blank">90 degree bracket</a></br>
1x <a href="" target="__blank">Memory Foam</a></br>
1x <a href="https://www.amazon.com/dp/B01DFKC2SO/ref=ods_gw_ha_bt_tpr_prime_im2?pf_rd_p=483723cc-7ecc-4053-9fa9-b9981d4521c3&pf_rd_r=2X36D6VF71ZDNDG4ECHE" target="__blank">Amazon Echo/Dot</a></br>
4x <a href="" target="__blank">Mounting Triangles </a></br>
1x <a href="
https://www.amazon.com/gp/product/B01CYIFO8I/ref=oh_aui_detailpage_o06_s00?ie=UTF8&psc=1" target="__blank">12V 3A Power adapter </a></br>
<b>Wood:</b> </br>
1/4th inch wood</br>
1/2 inch wood</br>
Various Screws: </br>
Wood glue </br>
*** TODO: Length of Screws *** </br>

<b>3D Printable files:</b> </br>
2x <a target="__blank">Stepper Motor Flang</a></br>
1x <a target="__blank">Rolling Flange</a></br>
4x <a target="__blank">Dampener</a></br>
1x <a target="__blank">Gimbal Endspot Guide</a></br>
5-10x <a target="__blank">Wire Guide</a></br>
1x <a target="__blank">Raspberry Pi 3 Container</a></br>
Optional: Spraypaint </br>

Hardware build
============
There are three main parts to the hardware build. The Box, the Gimbal, and turrent modifications. The gimbal was originally designed by the hackers over at HackerHouse, however the box and turrent modifications are original designs </br>
## The Box
*** TODO: Box dimensions Instructions *** </br>

## The Gimbal
A great resource to follow for the gimbal hardware build is the instructional video provided by <a href="https://www.youtube.com/watch?v=HoRPWUl_sF8">HackerHouse</a>. Some important adjustments have to be made from their build though: </br>
<li>Circular Platform should have a 16" diameter</li>
<li>Use Nema 17 5:1 Stepper Motors</li>
<li>The Vertical Stands should be 8" tall (MINIMUM)</li>
<li>We are using a Nerf Vulcan for this build</li>

## Turrent Modifications
*** TODO: Turrent Modification Instructions *** </br>
Finally, power the Raspberry Pi with any 5V supply and power the Motor Hat either using a 12V supply or a 5V supply and the 5-12V Buck Boost Converter. Now you are ready to install the necessary software


Software install
============
To get the Raspberry Pi up and running we need to install the necessary libraries

```bash
python3 -m pip install python-firebase
python3 -m pip install requests
sudo python 3 -m pip install git+https://github.com/adafruit/Adafruit-Motor-HAT-Python-Library
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

Save all items in the folder as a .zip file.

Follow the following instructions from Amazon to set up your own Lambda service and nodejs skill:</br>
https://developer.amazon.com/alexa-skills-kit/alexa-skill-quick-start-tutorial </br>
Load the .zip file into your lambda service </br>

Add the following command configurations to your Alexa skill in the Alexa skill developer portal </br>

## Different Alexa Commands Supported:
"Alexa launch Project Icarus" </br>
"Clean up" </br>
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
![3DModel-1](https://github.com/QuodCertamine/Project-Icarus/blob/master/models/fullimage-1.png)
![3DModel-2](https://github.com/QuodCertamine/Project-Icarus/blob/master/models/fullimage-2.png) </br>
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
