const students = [];

function addStudent() {
  const id = students.length + 1;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value
  const grade = document.getElementById('grade').value;
  const degree = document.getElementById('degree').value;
 
  
  const table = document.getElementById('studentTable');
  const row = table.insertRow(-1);

  const idCell = row.insertCell(0);
  const nameCell = row.insertCell(1);
  const emailCell = row.insertCell(2);
  const ageCell = row.insertCell(3);
  const gradeCell = row.insertCell(4);
  const degreeCell = row.insertCell(5);
  const editCell = row.insertCell(6);
  const deleteCell = row.insertCell(7);

  idCell.innerHTML = id;
  nameCell.innerHTML = name;
  emailCell.innerHTML = email;
  ageCell.innerHTML = age;
  gradeCell.innerHTML = grade;
  degreeCell.innerHTML = degree;

  const editButton = document.createElement('button');
  editButton.innerHTML = 'Edit';
  editButton.setAttribute('onclick', `editStudent(${id})`);
  editCell.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  deleteButton.setAttribute('onclick', `deleteStudent(${id})`);
  deleteCell.appendChild(deleteButton);

  const newStudent = {
    ID: id,
    name: name,
    email:email,
    age:age,
    grade: grade,
    degree: degree,
    
  };

  students.push(newStudent);

  document.getElementById('addStudentForm').reset();
}

function editStudent(id) {
  const student = students.find(student => student.ID === id);
  document.getElementById('name').value = student.name;
  document.getElementById('email').value = student.email;
  document.getElementById('age').value = student.age;
  document.getElementById('grade').value = student.grade;
  document.getElementById('degree').value = student.degree;

  // Change the button text and onclick behavior
  const addButton = document.getElementById('addStudentButton');
  addButton.innerHTML = 'Edit Student';
  addButton.setAttribute('onclick', `updateStudent(${student.ID})`);
  

}
function updateStudent(id) {
  const student = students.find(student => student.ID === id);
  
  student.name = document.getElementById('name').value;
  student.email = document.getElementById('email').value;
  student.age = document.getElementById('age').value;
  student.grade = document.getElementById('grade').value;
  student.degree = document.getElementById('degree').value;
  
  const table = document.getElementById('studentTable');
  const row = table.rows[id];
  row.cells[1].innerHTML = student.name;
  row.cells[2].innerHTML = student.email;
  row.cells[3].innerHTML = student.age;
  row.cells[4].innerHTML = student.grade;
  row.cells[5].innerHTML = student.degree;
  
  const addStudentButton = document.getElementById('addStudentButton');
  addStudentButton.innerHTML = 'Add Student';
  addStudentButton.setAttribute('onclick', 'addStudent()');
}

function deleteStudent(id) {
  const index = students.findIndex(student => student.ID === id);
  students.splice(index, 1);
  const table = document.getElementById('studentTable');
  table.deleteRow(id);
}

function searchStudent() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const table = document.getElementById('studentTable');
  for (let i = 1; i < table.rows.length; i++) {
    const name = table.rows[i].cells[1].innerHTML.toLowerCase();
    const email = table.rows[i].cells[4].innerHTML.toLowerCase();
    const degree = table.rows[i].cells[5].innerHTML.toLowerCase();
    if (name.includes(searchTerm) || email.includes(searchTerm) || degree.includes(searchTerm)) {
      table.rows[i].style.display = '';
    } else {
      table.rows[i].style.display = 'none';
    }
  }
}
