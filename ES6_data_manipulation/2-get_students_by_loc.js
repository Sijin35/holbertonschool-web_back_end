const getStudentsByLocation = (students, city) => {
    const studentByLoc = students.filter(student => student.location === city);
    return studentByLoc;
};

export default getStudentsByLocation;