export async function fetchData() {
  const response = await fetch('http://localhost:3001/users');
  const data = await response.json();
  return data;
}

function detach(node) {
  return node.parentElement.removeChild(node);
}

function renderUserTableUnoptimized(users) {
  const tbody = document.querySelector('tbody');
  users.forEach((user) => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);
    const idTd = document.createElement('td');
    idTd.innerText = user.id;
    tr.appendChild(idTd);
    const usernameTd = document.createElement('td');
    usernameTd.innerText = user.username;
    tr.appendChild(usernameTd);
    const emailTd = document.createElement('td');
    emailTd.innerText = user.email;
    tr.appendChild(emailTd);
  });
}
export const renderUserTable = function renderUserTableImproved(users) {
  const tbody = document.querySelector('tbody');
  detach(tbody);
  users.forEach((user) => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);
    const idTd = document.createElement('td');
    idTd.innerText = user.id;
    tr.appendChild(idTd);
    const usernameTd = document.createElement('td');
    usernameTd.innerText = user.username;
    tr.appendChild(usernameTd);
    const emailTd = document.createElement('td');
    emailTd.innerText = user.email;
    tr.appendChild(emailTd);
  });
  document.querySelector('table').appendChild(tbody);
}