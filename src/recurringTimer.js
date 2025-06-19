let recurringId = null;
export function recurringTimer(callback, interval = 1000) {
  recurringId = setInterval(callback, interval);
  return recurringId;
}
export function stopRecurringTimer() {
  if (recurringId !== null) {
    clearInterval(recurringId);
    recurringId = null;
  }
}