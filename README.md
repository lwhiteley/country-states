# country-states

database with countries and states

ISO 3166-2

```
const { compile, states } = require('country-states');

// provide compile with a list of country codes
compile(['DE', 'US']);

console.log(states('US'));
console.log(states('DE'));
```
