let students = [
    {
        name: "ram",
        gender: "male",
        paidStatus: false,
        hasScholarship: true,
        hasMetAttendance: true
    },
    {
        name: "sita",
        gender: "female",
        paidStatus: false,
        hasScholarship: true,
        hasMetAttendance: false
    },
    {
        name: "gita",
        gender: "female",
        paidStatus: true,
        hasScholarship: true,
        hasMetAttendance: true
    }
]

students.forEach(student => {
    checkEligibility(student);
});

// Disabiling this for now
function checkEligibility1(student) {
    // false || true = true
    if (student.paidStatus || student.hasScholarship) {
        if (student.hasMetAttendance) {
            console.log(student.name, "can give exam")
            return;
        }
    }
    console.log(student.name, "can't give exam");
}

function checkEligibility(student) {
    // false || true = true
    if (student.paidStatus || student.hasScholarship) {
        if (student.hasMetAttendance) {
            console.log(student.name, "can give exam")
            return;
        }
    }
    console.log(student.name, "can't give exam");
}