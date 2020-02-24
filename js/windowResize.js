function reportWindowSize() {
    console.log(window.innerHeight, window.innerWidth)
  }
  
window.onresize = reportWindowSize;