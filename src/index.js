module.exports = function reverse (n) {
  return Number(String(n < 0 ? n = Math.abs(n) : n).split('').reverse().join(''));
}
