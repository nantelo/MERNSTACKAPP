import { useState, useEffect } from "react";
import StudentForm from "./component/StudentForm";
import StudentList from "./component/StudentList";
import { getAllStudents } from "./api/studentApi";
import "./App.css";
import { deleteStudent } from "./api/studentApi";
function App() {
const [students, setStudents] = useState([]);
const fetchStudents = async () => {
const res = await getAllStudents();
setStudents(res.data);
};
useEffect(() => {
fetchStudents();
}, []);

const [editingStudent, setEditingStudent] = useState(null);


const handleDelete = async (id) => {
await deleteStudent(id);

 // Refresh the list after deletion
 fetchStudents();
};

// Pass to StudentList:



return (
<div className="container">
<h1>Student Management System</h1>
<StudentForm onStudentAdded={fetchStudents}
editingStudent={editingStudent}
clearEdit={() => setEditingStudent(null)}
/>
<StudentList 
students={students}
onEdit={setEditingStudent}
onDelete={handleDelete} />
</div>
);
}



export default App;