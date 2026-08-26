const createInt8TypedArray = (length, position, value) => {
    if (value < -128 || value > 127) {
        throw new Error('Position outside range');
    }
    const buffer = new ArrayBuffer(length);
    const myArr = new DataView(buffer);
    myArr.setInt8(position, value);
    return myArr;
};

export default createInt8TypedArray;