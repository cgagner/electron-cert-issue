// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

app.on('select-client-certificate', (event, webContents, url, list, callback) => {
  console.log('select-client-certificate called')
  console.log('Available Certs: ')
  console.log(list)
  
  event.preventDefault()
  //callback(list[1])
})

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWindow.loadURL('https://prod.idrix.eu/secure/')
  //mainWindow.loadURL('https://oceanai.mit.edu/svn/moos-ivp/releases/moos-ivp-19.8.2')
  //mainWindow.loadURL('https://www.computerhope.com/javascript/password-example.htm'
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
  console.log('Window Ready')
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
