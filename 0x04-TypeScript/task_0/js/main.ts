interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: 'John', lastName: 'Doe', age: 20, location: 'London' };
const student2: Student = { firstName: 'Jane', lastName: 'Smith', age: 22, location: 'Paris' };

const studentsList: Student[] = [student1, student2];

function renderTable(list: Student[]): void {
  const table = document.createElement('table');
  table.border = '1';
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  ['First Name', 'Location'].forEach((t) => {
    const th = document.createElement('th');
    th.textContent = t;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  list.forEach((s) => {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = s.firstName;
    tr.appendChild(tdName);
    const tdLoc = document.createElement('td');
    tdLoc.textContent = s.location;
    tr.appendChild(tdLoc);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  document.body.appendChild(table);
}

document.addEventListener('DOMContentLoaded', () => renderTable(studentsList));
