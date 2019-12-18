``` bash
# install artillery.io globally
$ npm install -g artillery

# check that installation succeeded
$ artillery -v

# install dependencies
$ npm run install

# updated ENDPOINT in both faker.js and test.yml file
# run test!
$ artillery run test.yml