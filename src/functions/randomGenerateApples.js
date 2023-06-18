export default {
    // Produces the specified number of apple objects between min and max fall times.
    generateApples: (count, min, max) => {
        const apples = [];
  
        for (let i = 0; i < count; i++) {
            const apple = {
                id          : i,
                top         : Math.floor(Math.random() * (-101)),
                left        : Math.floor(Math.random() * (300)) + 200,
                transition  : uniqTransitionGenerate(apples, min, max),
            };
            apples.push(apple);
        }
        return apples;
    }
};

// Unique fall time generating function
function uniqTransitionGenerate (apples, min, max) {
    const transitions = apples.map((item) => {
        return item.transition;
    });

    let transition;
    do {
        transition = (Math.random() * (max - min + 1)) + min;
    } while (transitions.some(_transition => _transition === transition));
      
    transitions.push(transition);
    return transition
}
  