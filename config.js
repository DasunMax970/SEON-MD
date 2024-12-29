const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'SEON-MD=aA9yjAZY#FI3q-MR2vS1k5ApHlWSf7M6Qhov_tMRM8xuIQ5I2VsI' : process.env.SESSION_ID,
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'uvindugit': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? 'Put your github auth token': process.env.GITHUB_AUTH_TOKEN
};
