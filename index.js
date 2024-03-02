// XMLHttpRequest is not defined Error in JavaScript

// EXAMPLE 1 - Using node-fetch

import fetch from 'node-fetch';

async function getUser() {
  try {
    const response = await fetch('https://randomuser.me/api/');

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

console.log(await getUser());

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using native fetch in Node.js v21

// // Works in Node.js version 21 or more recent ✅

// async function getUser() {
//   try {
//     const response = await fetch('https://randomuser.me/api/');

//     if (!response.ok) {
//       throw new Error(`Error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// }

// console.log(await getUser());

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using the popular `axios` module

// import axios from 'axios';

// async function getUser() {
//   try {
//     const response = await axios.get(
//       'https://randomuser.me/api/',
//     );

//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// }

// console.log(await getUser());

// ------------------------------------------------------------------

// import XMLHttpRequest from 'xhr2';

// function getUser() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function logger() {
//     if (this.readyState === 4 && this.status === 200) {
//       console.log(this.responseText);
//     }
//   };
//   xhttp.open('GET', 'https://randomuser.me/api/', true);
//   xhttp.send();
// }

// getUser();
