let users = {
  name: "sita",
  age: "19",
  address: {
    permanent: {
      province: "bagmati",
      district: "kathmandu",
      town: "chakrapath",
    },
    temporary: {
      province: "bagmati",
      district: "kathmandu",
      town: "chakrapath",
    },
  },
  contact: "97545454"
}
// console.log("Users", users);

let person = {
  name: "hari",
  age: 12,
  contact: 12321343,
  address: {
    permananetAddress: {
      province: "1",
      district: "jhapa",
      tole: "abc",
      municipality: {
        name: "unknown", // jhapa nagarpalika
        ward: 5,
      },
    },
    temporaryAddress: {
      province: "3",
      district: "kathamdnu",
      tole: "balaju",
      municipality: {
        name: "kathmandu nagarpalika",
        ward: 15,
      },
    },
  },
}

person.address.permananetAddress.municipality.name = "jhapa nagarpalika";

person.address.permananetAddress.house_no = "123";

console.log(person);

let course = {
  class: "mern",
  duration: "3 month",
  location: "kamalpokhari"
}

course.price = "100"

console.log(course);

let classes = [
  {
    class: "one",
    section: "A",
    classteacher: "Ram T",
    students: {
      name: "Hari S",
      roll: "1",
      subjects: [{
        subject: "Math",
        teacher: "Bhabesh T",
      },
      {
        subject: "English",
        teacher: "Sita T",
      }],
    },
  },
  {
    class: "two",
    section: "B",
    classteacher: "Hari T",
    students: {
      name: "Hari S",
      roll: "1",
      subjects: [{
        subject: "Math",
        teacher: "Bhabesh T",
      },
      {
        subject: "English",
        teacher: "Sita T",
      }],
    },
  },
  {
    class: "three",
    section: "C",
    classteacher: "Ravi T",
    students: {
      name: "Hari S",
      roll: "1",
      subjects: [{
        subject: "Math",
        teacher: "Bhabesh T",
      },
      {
        subject: "English",
        teacher: "Sita T",
      }],
    },
  },

];

console.log(classes);


let students = [
  {
    name: "ram",
    courses: [
      {
        title: "web",
      },
      {
        title: "ui - ux ",
      },
    ],
  },
  {
    name: "hari",
    courses: [{ title: "mern" }],
  },
  {
    name: "sita",
    courses: [
      {
        title: "web",
      },
      {
        title: "ux", // changet this to ui ux
      },
    ],
  },
]
students[2].courses[1].title = "ui ux"
console.log(students);  