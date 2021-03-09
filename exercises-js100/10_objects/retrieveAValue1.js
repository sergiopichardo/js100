/*
Write the code necessary to retrieve the value of
the courses property of our student object.
*/


/**
 * A student object containing multiple properties
 * @typedef {Object} Student
 * @property {string} name
 * @property {number} age
 * @property {number} grade
 * @property {string[]} courses
 * @property {number} gpa
 */


/**
 * @param {Student} student
 * @return {string[]} courses
 */
function getCourses(student) {
  if (student.hasOwnProperty('courses') && student['courses'].length !== 0) {
    return student['courses']
  }
  return []
}

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

let student2 = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  gpa: 3.75,
};

// console.log(getCourses(student)) // ['biology', 'algebra', 'composition', 'ceramics']
// console.log(getCourses(student2)) // []

/*
We can access the `courses` key in the student object by using reference the
key name through bracket notation, `student['courses'])`, or dot notation `student.courses`,
we can do this because of  `key lookup`, and if the key exists it will return the value.
However, if the key doesn't exist it will return `undefined`.
*/