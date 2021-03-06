# Electron Certificate Issue


Use the following commands to run start electron:

```bash
npm install
npm start
```

## Creating a Client Certificate on Linux

### Install NSS Tools

On Ubuntu/Debian: 
```bash
sudo apt-get install -y libnss3-tools
```

```bash
certutil -S  -d ${HOME}/.pki/nssdb -n "John Doe" -x -t ',,' -s "CN=John Doe"
```


Add Smart card support to Chrome:

```bash
modutil -dbdir ${HOME}/.pki/nssdb -add "Smart Card" -libfile /usr/lib/arm-linux-gnueabihf/opensc-pkcs11.so
```


## Creating a Client Certificate on Mac

1. Open the ```Keychain Access``` application. This is in the ```Utilities``` folder.
1. Select the ```Keychain Access``` > ```Certificate Assistant``` > ``` Create a Certificate``` menu options. 
1. Enter your name.
1. Use ```Self Signed Root``` for the Identity Type.
1. Select ```SSL Client``` for the Certificate Type.
1. Select the ```Create``` button. 
1. Select ```Continue``` on the warning dialog.
1. Select ```Done```.


See [apple.com](https://support.apple.com/guide/keychain-access/create-self-signed-certificates-kyca8916/mac)


