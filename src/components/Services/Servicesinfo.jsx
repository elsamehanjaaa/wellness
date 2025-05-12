import { notFound } from "next/navigation";

const serviceData = {
  "swedish-massage": {
    title: "Swedish Massage",
    description: "A calming full-body massage using gentle strokes to boost circulation and ease muscle tension.",
    image: "/services/swedishmassage.jpg",
    details: "This technique uses light to medium pressure and is great for stress relief, improving blood flow, and overall wellness.",
  },
  // ...more services
};

export default function ServiceDetailPage({ params }) {
  const service = serviceData[params.slug];

  if (!service) return notFound();

  return (
    <main className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-72 object-cover rounded-xl mb-6"
      />
      <p className="text-lg mb-4">{service.description}</p>
      <p className="text-gray-700">{service.details}</p>
    </main>
  );
}
