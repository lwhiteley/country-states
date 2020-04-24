# country-states

database with countries and states

```
const { compile, states } = require('country-states');

// provide compile with a list of country codes
compile(['DE', 'US']);

console.log(states('US'));
console.log(states('DE'));
```
