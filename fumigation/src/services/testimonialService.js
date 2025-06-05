// src/services/testimonialService.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export async function addTestimonial({ name, content, imagePath, videoPath, date }) {
  return await addDoc(collection(db, "testimonials"), {
    name,
    content,
    imagePath,
    videoPath,
    date,
  });
}

