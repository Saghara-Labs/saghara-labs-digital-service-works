import Card from "../ui/Card";

const cardData = [
  {
    title: "Tech Acquisition 2021",
    description: "Biggest enterprise tech acquisitions this year.",
    image: "/image-1.jpg",
    link: "#",
  },
  {
    title: "AI Breakthroughs",
    description: "Latest AI research and breakthroughs explained.",
    image: "/image-1.jpg",
    link: "#",
  },
  {
    title: "Startup Trends",
    description: "Top startup trends to watch this year.",
    image: "/image-1.jpg",
    link: "#",
  },
  {
    title: "Cybersecurity Update",
    description: "Recent security vulnerabilities and patches.",
    image: "/image-1.jpg",
    link: "#",
  },
  {
    title: "Cloud Innovations",
    description: "New developments in cloud computing.",
    image: "/image-1.jpg",
    link: "#",
  },
  {
    title: "Developer Tools",
    description: "Must-have tools for modern developers.",
    image: "/image-1.jpg",
    link: "#",
  },
];

export default function Cards() {
  return (
    <div className="flex min-h-screen items-center justify-center py-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
}
