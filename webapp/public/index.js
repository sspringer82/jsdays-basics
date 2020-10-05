import {fetchData, renderUserTable} from './util.js';

document.addEventListener("DOMContentLoaded", async () => { 
  // const divContainer = document.getElementById('container');
  // console.log(divContainer);
  const users = await fetchData();
  renderUserTable(users);
});




// function Table ({users}) {
//   return (
//     <table>
//       <thead>...</thead>
//       <tbody>
//         {users.map(user => (<tr>
//           <td>{user.id}</td>
//           <td>{user.username}</td>
//           <td>{user.email}</td>
//         </tr>))}
//       </tbody>
//     </table>
//   )
// }