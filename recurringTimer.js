let recurringId = null;

export function recurringTimer(callback, interval = 1000) {
  if (typeof callback !== 'function') {
    throw new Error('Callback must be a function');
  }
  if (typeof interval !== 'number' || interval <= 0) {
    throw new Error('Interval must be a positive number');
  }
  // Prevent multiple intervals
  if (recurringId !== null) {
    clearInterval(recurringId);
  }
  recurringId = setInterval(callback, interval);
  return recurringId;
}

export function stopRecurringTimer() {
  if (recurringId !== null) {
    clearInterval(recurringId);
    recurringId = null;
  }
}