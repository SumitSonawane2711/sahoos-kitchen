import React from 'react';
import Image from 'next/image';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

const EventsSection = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "Live Music Night",
      date: "Every Friday, 7:00 PM",
      description: "Enjoy live traditional music while dining with us every Friday evening.",
      image: "/images/events/music-night.jpg"
    },
    {
      id: 2,
      title: "Cooking Workshop",
      date: "First Saturday of the Month",
      description: "Learn to cook traditional dishes with our expert chefs.",
      image: "/images/events/cooking-workshop.jpg"
    },
    // Add more events as needed
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                <p className="text-primary font-medium mb-2">{event.date}</p>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection; 