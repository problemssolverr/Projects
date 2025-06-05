// src/context/AppContext.js
import React, { createContext, useEffect, useState } from "react";
import { fetchDownloadURL } from "../utils/firebaseUtils";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { db, auth } from "../firebase/firebase";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [videos, setVideos] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userDocRef = doc(db, "users", firebaseUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (!userDoc.exists()) {
            await setDoc(userDocRef, {
              email: firebaseUser.email,
              createdAt: new Date(),
            });
          }

          setUser(firebaseUser);
        } catch (err) {
          console.error("Error setting user document:", err);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const testimonialSnap = await getDocs(collection(db, "testimonials"));
        const videoSnap = await getDocs(collection(db, "videos"));

        const testimonialsData = await Promise.all(
          testimonialSnap.docs.map(async (doc) => {
            const data = doc.data();
            if (data.imagePath) {
              data.imageUrl = await fetchDownloadURL(data.imagePath);
            }
            return data;
          })
        );

        const videosData = await Promise.all(
          videoSnap.docs.map(async (doc) => {
            const data = doc.data();
            if (data.videoPath) {
              data.videoUrl = await fetchDownloadURL(data.videoPath);
            }
            return data;
          })
        );

        setTestimonials(testimonialsData);
        setVideos(videosData);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchData();
  }, []);

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    await setDoc(doc(db, "users", firebaseUser.uid), {
      email: firebaseUser.email,
      createdAt: new Date(),
    });
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AppContext.Provider
      value={{
        testimonials,
        setTestimonials,
        videos,
        setVideos,
        user,
        login,
        signup,
        logout,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


























// import React, { createContext, useState } from "react";

// export const AppContext = createContext();

// const initialTestimonials = [
//   {
//     name: "Awaye Oluwayobi",
//     date: "2025-04-02",
//     content:
//       "On behalf of hospital management ASO are amazing with 100% satisfactory to the morgue disinfestation, deratization and fumigation Service done.",
//     image: "/assets/pct1.jpg",
//   },
//   {
//     name: "Mrs Taiwo Alapoti",
//     date: "2025-04-01",
//     content:
//       "ASO team are competent Fumigation Service Provider and satisfactory well-done job",
//     image: "/assets/pct2.jpg",
//   },
//   {
//     name: "ICPC chairman General Hospital Ijaya",
//     date: "2025-04-01",
//     content:
//       "Satisfactory and well-done to effective fumigation Service Provided by us within hospital premises.",
//     image: "/assets/ptc3.jpg",
//   },
// ];

// export const AppProvider = ({ children }) => {
//   const [testimonials, setTestimonials] = useState(initialTestimonials);
//   const [videos, setVideos] = useState([]);

//   return (
//     <AppContext.Provider value={{ testimonials, setTestimonials, videos, setVideos }}>
//       {children}
//     </AppContext.Provider>
//   );
// };






















// src/context/AppContext.jsx
// import React, { createContext, useState } from "react";

// export const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [videos, setVideos] = useState([]);

//   return (
//     <AppContext.Provider value={{ testimonials, setTestimonials, videos, setVideos }}>
//       {children}
//     </AppContext.Provider>
//   );
// };
