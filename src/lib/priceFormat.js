module.exports = (price) => {
    return price
        .toString()
        .split('')
        .reverse()
        .reduce((t, c) => t.length > 0 && t.length % 4 !== 0 ? c + t : c + ' ' + t, '')
}