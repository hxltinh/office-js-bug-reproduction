# Reproduce OfficeJs Dialog bug

### Install certificate on Windows
 1. In the certs folder just double-click the server.crt and install it to the user trusted root certificates
 2. Open the C:\Windows\System32\drivers\etc\hosts file as *Admin* and enter the following line

    127.0.0.1   local.office

### Install certificate on Mac

 1. Open "Keychain Access" in the Finder Menu under Go > Utilities or with Spotlight search.
 2. Click on File > Import Items and import the server.crt file.
 3. Open Finder select Go > Go to Folder and enter "/private/etc/hosts". Double Click the hosts file and enter the following line

    127.0.0.1 local.office

### Step
1. cd office-bug
2. npm install
3. node live-server
4. install manifest