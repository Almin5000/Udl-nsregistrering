// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../css/Computeroversigt.css';

// function Computeroversigt() {
//   const [computers, setComputers] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://gorilla-informed-asp.ngrok-free.app/Computer/GetAllNonRentedComputers')
//       .then((response) => {
//         console.log('Response Data:', response.data); 
//         if (Array.isArray(response.data)) {
//           setComputers(response.data);
//         } else {
//           console.error('Data is not an array:', response.data);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching data: ', error);
//       });
//   }, []);

//   return (
//     <div className="computer-overview-container">
//       <h2 className="computer-overview-title">Oversigt over de ledige computer</h2>
//       <div className="computer-list">
//         {computers.map((computer) => (
//           <div key={computer.computerID} className="computer-item">
//             <div className="item-field">
//               <span className="field-label">Computer ID:</span>
//               <span>{computer.computerID}</span>
//             </div>
//             <div className="item-field">
//               <span className="field-label">Registreringsnummer:</span>
//               <span>{computer.registreringsNummer}</span>
//             </div>
//             <div className="item-field">
//               <span className="field-label">Model Navn:</span>
//               <span>{computer.modelNavn}</span>
//             </div>
//             <div className="item-field">
//               <span className="field-label">Fabrikat Navn:</span>
//               <span>{computer.fabrikatNavn}</span>
//             </div>
//             <div className="item-field">
//               <span className="field-label">Mus Type:</span>
//               <span>{computer.musType}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Computeroversigt;
