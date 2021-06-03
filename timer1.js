//In order to make our machine perform a system sound
const sound = () => process.stdout.write('\x07');
const beep = mSecs => {
  let delay = Num(mSecs);
  setTimeout(sound, delay * 1000);
};
const args = process.argv;

const alarm = (args) => {
  let newArgs = args.slice(2);
  length = newArgs.length;
  for (let ele of newArgs) {
    if (isNaN(ele)) {
      console.log("beep not a number");
    } else if (ele < 0) {
      console.log("beep enter in seconds");
    } else if (length === 0) {
      console.log("beep no seconds entered");
      return;
    } else {
      beep(ele);
      console.log("beep Time To Wake Up!");
    }
  }
}
alarm(args);