import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getApp } from "firebase/app";

const CleaningServiceSection = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore(getApp());

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "cleaningProviders"));
        const fetchedProviders = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProviders(fetchedProviders);
      } catch (error) {
        console.error("Error fetching providers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-600">Loading providers...</div>
    );
  }

  return (
    <section className="bg-gray-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
        Cleaning Service Providers
      </h2>

      {providers.length === 0 ? (
        <p className="text-center text-gray-600">No providers found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <img
                src={provider.image}
                alt={provider.name}
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {provider.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{provider.service}</p>
                <p className="text-yellow-500 font-medium mt-2">
                  ⭐ {parseFloat(provider.rating).toFixed(1)} / 5.0
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  📞 {provider.phone}
                </p>
                <a
                  href="https://wa.me/2347066563261?text=Hi%2C%20I%27d%20like%20to%20book%20a%20cleaning%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold">
                    Contact Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CleaningServiceSection;
