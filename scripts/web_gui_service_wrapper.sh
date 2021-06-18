#!/bin/bash
#
# DFN Interval capture control SW wrapper script
#
# This is needed for systemd service, as it is not possible
# to eg redirect stdout/stderr in *.service file
#

logFileDir=/data0/log/GUI
logFile=${logFileDir}/web_gui_`date -u +%Y-%m-%d_%H%M%S`UTC.log
errLogFile=${logFileDir}/web_gui_`date -u +%Y-%m-%d_%H%M%S`UTC_err.log

PATH=/usr/local/bin:/sbin:/bin:/usr/bin:/usr/sbin

prg=/opt/dfn-software/GUI/web_gui_server.py

if [ ! -e ${prg} ]
then
    echo "${prg} not found!"
    exit 1
fi

/usr/bin/python ${prg} >${logFile} 2>${errLogFile}
