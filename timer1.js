const Arg = process.argv.slice(2);

const timer = time => {
  if (time > 0 && Number(time)) {
    for (const elem of time) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, (Number(elem) * 1000));
    }
  }
};

timer(Arg);