const Arg = process.argv.slice(2);

const timer = time => {
  for (const elem of time) {
    if (elem > 0 && Number(elem)) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, (Number(elem) * 1000));
    }
  }
};

timer(Arg);