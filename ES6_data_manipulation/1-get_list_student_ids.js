const getListStudentIds = (students) => {
    if (!Array.isArray(students)) {
        return [];
    } else {
        const id = students.map(students => students.id);
        return id;
    }
};

export default getListStudentIds;