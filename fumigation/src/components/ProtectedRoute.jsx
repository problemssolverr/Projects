// import React, { useEffect, useState } from 'react';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../firebase/firebase';
// import { useNavigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const [user, setUser] = useState(undefined); // undefined = checking
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//       } else {
//         setUser(null);
//         navigate('/login'); // redirect if not authenticated
//       }
//     });

//     return () => unsubscribe();
//   }, [navigate]);

//   if (user === undefined) return <div className="text-white">Loading...</div>;

//   return user ? children : null;
// };

// export default ProtectedRoute;
