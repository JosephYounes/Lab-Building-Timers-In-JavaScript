export function countdownTimer(start, interval = 1000, log = console.log) {
  let remaining = start;
  const id = setInterval(() => {
    log(remaining);
    remaining--;
    if (remaining < 0) clearInterval(id);
  }, interval);
  return id;
}