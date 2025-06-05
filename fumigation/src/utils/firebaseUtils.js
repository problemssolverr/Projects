import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase/firebase"; // your Firebase storage instance

export const fetchDownloadURL = async (path) => {
  try {
    const fileRef = ref(storage, path);
    const url = await getDownloadURL(fileRef);
    return url;
  } catch (error) {
    console.error("Failed to fetch download URL:", error);
    return null;
  }
};
