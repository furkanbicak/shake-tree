export default {
    // Random number generating function
    getRandomInt: (min, max) => {
        return  Math.floor(Math.random() * (max - min)) + min;
    }
}