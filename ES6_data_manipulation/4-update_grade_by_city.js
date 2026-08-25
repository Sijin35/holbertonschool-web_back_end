const updateStudentGradeByCity = (students, city, newGrades) => {
    const studentByLoc = students.filter(student => student.location === city);
    const newArray = studentByLoc.map(student => {
        const newGrade = newGrades.find(grade => grade.studentId === student.id);
        let finalGrade = '';

        if (newGrade === undefined) {
            finalGrade = 'N/A';
        } else {
            finalGrade = newGrade.grade;
        };

        return {
            ...student,
            grade: finalGrade,
        };
    });


    return newArray;
}

export default updateStudentGradeByCity;