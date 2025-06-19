export function delayedReminder(message, delay, log = console.log) {
  if (typeof delay !== 'number' || delay < 0) {
    throw new Error('Delay must be a non-negative number');
  }
  if (typeof log !== 'function') {
    throw new Error('Log must be a function');
  }
  return new Promise(resolve => {
    setTimeout(() => {
      log(message);
      resolve();
    }, delay);
  });
}