export function countdownTimer(start, interval = 1000, log = console.log) {
  if (!Number.isInteger(start) || start < 0) {
    throw new Error('Start must be a non-negative integer');
  }
  if (typeof interval !== 'number' || interval <= 0) {
    throw new Error('Interval must be a positive number');
  }
  if (typeof log !== 'function') {
    throw new Error('Log must be a function');
  }

  let remaining = start;
  const id = setInterval(() => {
    log(remaining);
    remaining--;
    if (remaining < 0) {
      clearInterval(id);
    }
  }, interval);
  return id;
}