const n = 5;
for (let i = 1; i <= n; i++) {
  let row = '';
  // Add spaces before the asterisks
  for (let j = 1; j <= n - i; j++) {
    row += ' ';
  }
  // Add asterisks
  for (let j = 1; j <= 2 * i - 1; j++) {
    row += '*';
  }
  console.log(row);
}
