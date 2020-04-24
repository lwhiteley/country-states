# country-states

database with countries and states

```
const { compile, states } = require('../src');

// provide compile with a list of country codes
compile(['DE', 'US']);

console.log(states('US'));
console.log(states('DE'));
```
