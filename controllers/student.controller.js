let students = [
  { id: 1, name: "Arman", branch: "CSE", email: "aman@test.com" },
  { id: 2, name: "Rohit", branch: "IT", email: "rohit@test.com" },
  { id: 3, name: "Neha", branch: "CSE", email: "neha@test.com" },
  { id: 4, name: "Sara", branch: "ECE", email: "sara@test.com" }
];



export const getStudents = (req, res) => {

  const { branch } = req.query;

  if (branch) {
    const filtered = students.filter(
      s => s.branch.toLowerCase() === branch.toLowerCase()
    );
    return res.json(filtered);
  }

  res.json(students);
};



export const deleteStudent = (req, res) => {

  const id = parseInt(req.params.id);

  students = students.filter(student => student.id !== id);

  res.json({
    message: "Student deleted successfully"
  });
};