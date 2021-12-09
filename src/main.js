const { app, Menu, Tray, BrowserWindow } = require("electron");
const path = require('path');
const {ipcMain} = require('electron')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = (position) => {
  // Create the browser window.
  // We cannot require the screen module until the app is ready.
  const { screen } = require('electron');

  // Create a window that fills the screen's available work area.
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;

  const browserWidth = 400;
  const browserHeight = height;

  const leftEdge = 0;
  const rightEdge = width - browserWidth;
  const topEdge = 0;
  const bottomEdge = height - height;

  const edge = position === "left" ? leftEdge : rightEdge;

  const win = new BrowserWindow({
    width: browserWidth,
    height: browserHeight,
    x: edge,
    y: 0,
    minWidth: 392,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    },
    titleBarStyle: 'hiddenInset',
    show: false,
    backgroundColor: "#0B0D0E"
  });

  win.loadURL(
    MAIN_WINDOW_WEBPACK_ENTRY
  );

  win.once('ready-to-show', () => {
    win.show()
  })

}

let tray = null;

app.on('ready', () => {
  tray = new Tray(path.join(__dirname, '/icon.png'));

  if (process.platform === 'win32') {
    tray.on('click', tray.popUpContextMenu);
  }

  const menu = Menu.buildFromTemplate([
    {
      label: 'Create New Light - Left',
      click() { createWindow("left"); }
    },
    {
      label: 'Create New Light - Right',
      click() { createWindow("right"); }
    }
  ]);

  tray.setContextMenu(menu);
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.