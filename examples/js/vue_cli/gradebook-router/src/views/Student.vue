<template>
  <div>
    <h1>Grades for {{ student.student_name }} ({{ student.student_no }})</h1>
    <my-table
      v-bind:table-key="'stud-' + student_no"
      v-bind:headings="headings"
      v-bind:rows="grades"
    ></my-table>

    <h1>Add grades</h1>
    <grade-form v-bind:student_no="student_no"></grade-form>
    <button v-on:click="$router.push('/')">To main</button>
  </div>
</template>

<script>
import GradeForm from "../components/GradeForm.vue";
import MyTable from "../components/MyTable.vue";
import state from "../store.js";

export default {
  name: "student-page",
  props: ["student_no"],
  components: {
    MyTable,
    GradeForm,
  },
  computed: {
    grades() {
      return state.studentGrades(this.student_no);
    },
    student() {
      return state.student(this.student_no);
    },
    headings: () => {
      return [
        { name: "Course", key: "course_id" },
        { name: "Grade", key: "grade" },
      ];
    },
  },
};
</script>
