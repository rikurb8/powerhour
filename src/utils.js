export function minutesSinceLastHour() {
  return Math.floor((Date.now() % (60 * 60 * 1000)) / (60 * 1000));
}

export function log(...args) {
  console.log(`xxx: ${args}`);
}
