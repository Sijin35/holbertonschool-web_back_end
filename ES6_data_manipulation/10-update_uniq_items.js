const updateUniqueItems = (m) => {
    if (!(m instanceof Map)) {
        throw new Error('Cannot process')
    }

    for (let[k, v] of m.entries()) {
        if (v === 1) {
            v = 100;
            m.set(k, v);
        }
    }

    return m;
}

export default updateUniqueItems;