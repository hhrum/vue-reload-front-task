module.exports = (arr) => arr.reduce((t, c) => {
    if (Math.floor(Math.random() * 10) % 2 === 1) {
        t.unshift(c);
    } else {
        t.push(c);
    }

    return t;
}, [])