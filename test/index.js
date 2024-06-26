const util = require('../dist/index');

const options = {
    timeout: 1000 * 5, // timeout in milliseconds
    enableSRV: true // SRV record lookup
};

// The port and options arguments are optional, the
// port will default to 25565 and the options will
// use the default options.
util.status('play.hypixel.net', 25565, options)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));