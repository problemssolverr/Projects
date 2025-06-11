import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, storage, auth } from "../firebase/firebase";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [videos, setVideos] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth);
  };

  const handleVideoUpload = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const file = e.target.video.files[0];
    if (!file || !title) return;

    try {
      const timestamp = Date.now();
      const storageRef = ref(storage, `project_videos/${timestamp}-${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      const docRef = await addDoc(collection(db, "projectVideos"), {
        title,
        url: downloadURL,
        createdAt: new Date().toISOString(),
      });

      setVideos([...videos, { id: docRef.id, title, url: downloadURL }]);
      e.target.reset();
    } catch (error) {
      console.error("Video upload error:", error);
    }
  };

  const handleTestimonialUpload = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const content = e.target.message.value;
    const imageFile = e.target.image.files[0];
    const videoFile = e.target.video?.files[0];

    let imagePath = "";
    let videoPath = "";

    try {
      if (imageFile) {
        const imageRef = ref(storage, `testimonials/${Date.now()}-${imageFile.name}`);
        await uploadBytes(imageRef, imageFile);
        imagePath = await getDownloadURL(imageRef);
      }

      if (videoFile) {
        const videoRef = ref(storage, `testimonials/${Date.now()}-${videoFile.name}`);
        await uploadBytes(videoRef, videoFile);
        videoPath = await getDownloadURL(videoRef);
      }

      const testimonialData = {
        name,
        content,
        imagePath,
        videoPath,
        date: new Date().toISOString().split("T")[0],
      };

      await addDoc(collection(db, "testimonials"), testimonialData);

      setTestimonials([...testimonials, testimonialData]);
      e.target.reset();
    } catch (error) {
      console.error("Testimonial upload error:", error);
    }
  };

  const handleProviderUpload = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const service = e.target.service.value;
    const phone = e.target.phone.value;
    const rating = parseFloat(e.target.rating.value);
    const imageFile = e.target.image.files[0];

    if (!name || !service || !phone || isNaN(rating) || !imageFile) return;

    try {
      const imageRef = ref(storage, `providers/${Date.now()}-${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      const imageURL = await getDownloadURL(imageRef);

      const providerData = { name, service, phone, rating, image: imageURL };

      const docRef = await addDoc(collection(db, "cleaningProviders"), providerData);
      setProviders([...providers, { id: docRef.id, ...providerData }]);
      e.target.reset();
    } catch (error) {
      console.error("Provider upload error:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-red-500 text-lg font-semibold">
          Please log in to access the dashboard.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-lime-400">User Dashboard</h1>
        {/* <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-bold"
        >
          Logout
        </button> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Project Videos Upload */}
        <form onSubmit={handleVideoUpload} className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Upload Project Video</h2>
          <input
            type="text"
            name="title"
            placeholder="Video Title"
            required
            className="w-full p-2 mb-4 rounded text-black"
          />
          <input
            type="file"
            name="video"
            accept="video/mp4"
            required
            className="w-full p-2 mb-4 rounded bg-gray-700"
          />
          <button
            type="submit"
            className="bg-lime-500 px-4 py-2 rounded text-black font-bold hover:bg-lime-600"
          >
            Upload Video
          </button>
        </form>

        {/* Testimonial Upload */}
        <form onSubmit={handleTestimonialUpload} className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Upload Testimonial</h2>
          <input
            type="text"
            name="name"
            placeholder="Customer Name"
            required
            className="w-full p-2 mb-4 rounded text-black"
          />
          <textarea
            name="message"
            placeholder="Testimonial Message"
            required
            className="w-full p-2 mb-4 rounded text-black"
            rows="4"
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full p-2 mb-4 rounded bg-gray-700"
          />
          <input
            type="file"
            name="video"
            accept="video/mp4"
            className="w-full p-2 mb-4 rounded bg-gray-700"
          />
          <button
            type="submit"
            className="bg-lime-500 px-4 py-2 rounded text-black font-bold hover:bg-lime-600"
          >
            Upload Testimonial
          </button>
        </form>

        {/* Cleaning Provider Upload */}
        <form onSubmit={handleProviderUpload} className="bg-gray-800 p-6 rounded-xl col-span-1 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Add Cleaning Provider</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Provider Name"
              required
              className="p-2 rounded text-black"
            />
            <input
              type="text"
              name="service"
              placeholder="Service Type"
              required
              className="p-2 rounded text-black"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="p-2 rounded text-black"
            />
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              step="0.1"
              placeholder="Rating (1–5)"
              required
              className="p-2 rounded text-black"
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              className="col-span-1 md:col-span-2 p-2 rounded bg-gray-700"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-lime-500 px-4 py-2 rounded text-black font-bold hover:bg-lime-600"
          >
            Add Provider
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
