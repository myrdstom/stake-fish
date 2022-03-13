# Setup

- run `yarn` or `npm i` to install packages
- run `yarn start` or `npm start`

# Tests
- run tests with `yarn run cypress`

# Lint
- run `yarn lint`

# Notes
- No reason to hide the `.env` as the `coingeko` api is open to all
- No state management used as the application is small. It is however built with scaling taken into account
- On a larger scale, the application can benefit from debounce to counter rapid clicks
- Caching api requests can be implemented with time to improve the use experience.
- Opted for `mui` to minimize time spent on css and it gives basic responsiveness out of the box
- I wrote cypress tests as that is what you leverage but I'm comfortable with all types of tests

# Author
Paul Kayongo
