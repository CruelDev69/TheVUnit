const TheVUnitError = require('./errors/Error.js');

async function disrespect() {

    let disrespected = [
        'https://media.giphy.com/media/cbG9wtoO8QScw/giphy.gif',
        'https://media.giphy.com/media/ro08ZmQ1MeqZypzgDN/giphy.gif',
        'https://media.giphy.com/media/3ohhwKSy9AudKhMFyg/giphy.gif',
        'https://tenor.com/view/who-asked-who-tf-asked-nasa-rocket-bull-crap-who-in-the-heck-asked-gif-18488733',
        'https://media.giphy.com/media/lS6v4CrctoiXgld8tt/giphy.gif',
        'https://media.giphy.com/media/x4kwwbqmmi6jnDC60a/giphy.gif'

    ];

    return disrespected[Math.floor(Math.random() * disrespected.length)];
};


module.exports = disrespect;