import { delayedReminder } from './delayedReminder.js';
import { recurringTimer, stopRecurringTimer } from './recurringTimer.js';
import { countdownTimer } from './countdownTimer.js';

jest.useFakeTimers();

describe('delayedReminder', () => {
  it('logs the message after the delay', async () => {
    const log = jest.fn();
    const promise = delayedReminder('hello', 1000, log);
    jest.advanceTimersByTime(1000);
    await promise;
    expect(log).toHaveBeenCalledWith('hello');
  });
});

describe('recurringTimer & stopRecurringTimer', () => {
  it('calls the callback repeatedly and stops', () => {
    const cb = jest.fn();
    recurringTimer(cb, 500);
    jest.advanceTimersByTime(1500);
    expect(cb).toHaveBeenCalledTimes(3);
    stopRecurringTimer();
    jest.advanceTimersByTime(1000);
    expect(cb).toHaveBeenCalledTimes(3); // Should not be called again
  });
});

describe('countdownTimer', () => {
  it('counts down from start to 0', () => {
    const log = jest.fn();
    countdownTimer(2, 500, log);
    jest.advanceTimersByTime(1500);
    expect(log.mock.calls).toEqual([[2], [1], [0]]);
  });
});