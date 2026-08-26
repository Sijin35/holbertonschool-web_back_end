const createInt8TypedArray = (length, position, value) => {
    const buffer = new ArrayBuffer(length);
    const myArr = new DataView(buffer);
    myArr.setInt8(position, value);
    if (value < -128 || value > 127) {
        throw new Error('Position outside range');
    }

    return myArr;
};

export default createInt8TypedArray;