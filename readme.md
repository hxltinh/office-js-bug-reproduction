# Reproduce OfficeJs Dialog bug

### Install certificate on Windows
 1. In the certs folder just double-click the server.crt and install it to the user trusted root certificates
 2. Open the C:\Windows\System32\drivers\etc\hosts file as *Admin* and enter the following line

    127.0.0.1   local.office

### Install certificate on Mac

 1. Open "Keychain Access" in the Finder Menu under Go > Utilities or with Spotlight search.
 2. Click on File > Import Items and import the server.crt file.
 3. Open Finder select Go > Go to Folder and enter "/private/etc/hosts". Double Click the hosts file and enter the following line (or using command: `$ sudo vi /etc/hosts`). Might need super user right to update hosts file.

    127.0.0.1 local.office

### Step
1. $ npm install
2. $ npm start
3. install manifest
4. run add-in
5. click the `Open pop-out` button
6. open Inspector > console for Pop-out window  (If you can not open Inspector for popup, please use [vorlonJs](http://www.vorlonjs.io/), you need to setup https for vorlonJs using files in certs folder)
