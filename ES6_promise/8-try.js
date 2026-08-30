const divideFunction = (numerator, denominator) => {
    if (denominator === 0) {
        throw new Error('cannot divide by zero');
    }

    return numerator / denominator;
}

export default divideFunction;