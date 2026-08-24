const getStudentIdsSum = (students) => {
    const total = students.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.id;
    }, 0);

    return total;
}

export default getStudentIdsSum;