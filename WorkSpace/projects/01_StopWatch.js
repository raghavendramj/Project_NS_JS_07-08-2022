//Constructor function
function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0; //Private Variables

  //start() -> Public member
  this.start = function () {
    if (running) {
      throw new Error("Stop watch already started!");
    }
    running = true;
    startTime = new Date();
  };

  //stop() -> Public member
  this.stop = function () {
    if (!running) {
      throw new Error("Stop watch not started!");
    }
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  //reset() -> Public member
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  //Create one getter and setter for duration
  Object.defineProperty(this, "duration", {
    get: function () {
      if (endTime == null) {
        return 0;
      }
      let tillNow = running ? new Date() : endTime;
      const seconds = (tillNow.getTime() - startTime.getTime()) / 1000;
      return seconds;
    },
  });
}
