# Desert Fireball Camera Network

This is the code for the GUI which will be used to maintain the camera network for the Fireballs in the Sky project.
The GUI is a web-based interface, using web.py to serve both html and static files such as stylesheets, and to handle HTTP requests.

## Things learnt

* More Python tidbits, and learning the web.py framework
* HTTP request fundamentals, including AJAX requests
* Hashing and salt, using sha1
* Database queries using sqlite3, and SQL Injection defence
* More HTML/CSS stuff
* jQuery and incidentally, Javascript.
* AJAX with jQuery.
* Bash commands + Linux stuff

## Required Packages

* Python 2.7 (due to web.py)
* web.py

### DFNSMALLs install:
```
apt-get install python-webpy
```
### DFNEXTs install:
```
apt-get install python-webpy
```
or
```
pip install web.py
```
### Alternative: install from source (github)
https://github.com/webpy/webpy

### Other notes
Make sure that subdirectory /opt/dfn-software/GUI/sessions exists and is writeable for the web_gui_server.
