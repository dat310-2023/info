import { reactive } from "vue";

const courses = [
  { course_id: "MAT100", course_name: "Mathematical methods I." },
  { course_id: "MAT200", course_name: "Mathematical methods II." },
  { course_id: "DAT100", course_name: "Object-oriented programming" },
  { course_id: "DAT200", course_name: "Algorithms and data structures" },
  { course_id: "DAT220", course_name: "Databases" },
  { course_id: "DAT310", course_name: "Web programming" },
  { course_id: "DAT320", course_name: "Operating Systems" },
];

const students = [
  { student_no: "111111", student_name: "John Smith" },
  { student_no: "222222", student_name: "Mary Jane" },
  { student_no: "333333", student_name: "Lars Kongen" },
];

const grades = [
  { student_no: "111111", course_id: "MAT100", grade: "B" },
  { student_no: "222222", course_id: "MAT100", grade: "D" },
  { student_no: "333333", course_id: "MAT100", grade: "A" },
  { student_no: "111111", course_id: "MAT200", grade: "C" },
  { student_no: "222222", course_id: "MAT200", grade: "C" },
  { student_no: "333333", course_id: "MAT200", grade: "A" },
  { student_no: "111111", course_id: "DAT100", grade: "B" },
  { student_no: "222222", course_id: "DAT100", grade: "C" },
  { student_no: "333333", course_id: "DAT100", grade: "A" },
  { student_no: "111111", course_id: "DAT200", grade: "C" },
  { student_no: "222222", course_id: "DAT200", grade: "D" },
  { student_no: "333333", course_id: "DAT200", grade: "A" },
  { student_no: "111111", course_id: "DAT220", grade: "C" },
  { student_no: "222222", course_id: "DAT220", grade: "B" },
  { student_no: "333333", course_id: "DAT220", grade: "A" },
  { student_no: "222222", course_id: "DAT310", grade: "A" },
  { student_no: "333333", course_id: "DAT310", grade: "B" },
  { student_no: "333333", course_id: "DAT320", grade: "A" },
];

let state = reactive({
  courses,
  students,
  grades,

  // like computed in vue instance, but use state argument instead of this.
  studentGrades: function (student_no) {
    let grades = state.grades;
    return grades.filter((grade) => grade.student_no === student_no);
  },
  courseGrades(course_id) {
    return state.grades.filter((grade) => grade.course_id === course_id);
  },
  student(student_no) {
    return state.students.find((stud) => stud.student_no === student_no);
  },
  course(course_id) {
    return state.courses.find((course) => course.course_id === course_id);
  },
  addGrade: function (grade) {
    this.grades.push(grade);
    console.log("added grade: ", grade);
  },
});

export default state;
