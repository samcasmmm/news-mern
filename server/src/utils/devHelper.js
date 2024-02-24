"use strict";
exports.__esModule = true;
exports.generateSecretKey = exports.Print = void 0;
function createLine(num) {
    return '-'.repeat(num || 50);
}
function createBoxLine(content, extra) {
    if (extra === void 0) { extra = ''; }
    return "| ".concat(content.padEnd(46 - extra.length)).concat(extra, " |");
}
function Print(message, width) {
    console.log(createLine());
    console.log(createBoxLine(message));
    console.log(createLine());
}
exports.Print = Print;
// Generate Secret Key
function generateSecretKey() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    var secretKey = '';
    for (var i = 0; i < 25; i++) {
        secretKey += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return secretKey;
}
exports.generateSecretKey = generateSecretKey;
