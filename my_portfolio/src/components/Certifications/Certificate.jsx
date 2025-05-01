import React from "react";

const certifications = [
  {
    title: "AWS Internship",
    image: "/images/AWS-Internship certificate1.jpg",
  },
  {
    title: "Python Foundation",
    image: "/images/infosys_python_certificate.png",
  },
  {
    title: "AWS-Cloud Computing",
    image: "/images/AWS_certificate.jpg",
  },
  {
    title: "Nptel-Cloud Computing",
    image: "/images/nptel_certificate.jpg",
  },
  {
    image: "/images/livequiz_certificate.jpg",
  },
  {
    title: "ALGO-TRADING",
    image: "/images/algotrade_certificate.jpg",
  },
];

export default function Certifications() {
  return (
    <div id="Certificates" className="p-6 md:p-12 bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-10 text-center text-white">My Certifications</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-auto h-auto max-w-full max-h-[400px] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <h2 className="text-white text-xl font-semibold drop-shadow-md">{cert.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
