// This file should be ignored by ignorePatterns
// It contains a debugger statement that would cause lint error if not ignored
function badCode() {
  debugger;
  return 'bad';
}

console.log(badCode()   );