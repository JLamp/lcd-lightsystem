export const createWindow = (position) => {
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
      x: leftEdge,
      y: 0,
      webPreferences: {
        nodeIntegration: true,
        nodeIntegrationInWorker: true
      }
    });
  
  
    win.loadURL(
      MAIN_WINDOW_WEBPACK_ENTRY
    );
  
  }