module.exports = {
    rnd: (max, min) => {
        max--;
        min++;
        return Math.floor( Math.random() * (max + 1 - min) ) + min ;
    }
}