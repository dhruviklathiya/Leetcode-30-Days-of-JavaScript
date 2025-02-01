const fn = (x) => console.log(`${Date.now()}:`, x * 2);
const cancelTimeMs = 190;
const cancelFn = cancellable(fn, [4], 35);

setTimeout(cancelFn, cancelTimeMs);
