import { CalendarDays, Settings, Home } from 'lucide-react';

export default function SafeguardSection() {
  const features = [
    {
      icon: <CalendarDays className="h-10 w-10 text-lime-500" />,
      title: 'Schedule an Appointment',
      description: 'Call, Text or Book Online',
    },
    {
      icon: <Settings className="h-10 w-10 text-lime-500" />,
      title: 'Custom Tailored Treatment',
      description: 'We inspect your home and treat according to your needs.',
    },
    {
      icon: <Home className="h-10 w-10 text-lime-500" />,
      title: 'Enjoy a Bug Free Home',
      description: 'We exterminate the bugs so you can enjoy life at home.',
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 text-center">
      <h2 className="text-md md:text-md font-extrabold tracking-wide uppercase mb-10">
        Chase pests away from your home, office, school, hostel <br />
        <span className="block mt-2">before they chase you out without your consent and respect</span>
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            {feature.icon}
            <h3 className="mt-4 text-lg font-semibold uppercase tracking-widest">
              {feature.title}
            </h3>
            <p className="mt-2 text-base text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
      <a 
        href="https://wa.me/2347066563261?text=Hi%2C%20I%27d%20like%20to%20book%20a%20pest%20control%20service."
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="border-2 hover:bg-lime-400 border-lime-400 text-white font-semibold mt-10 px-12 py-6 ">BOOK NOW</button>
      </a>
    </section>
  );
}
