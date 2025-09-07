// Additional team sections
const engineeringDesign = [
  {
    name: "Dharmendra Pandit",
    title: "Technical Head",
    description:
      "Leads platform architecture, reliability, DevOps, and developer velocity.",
    tags: ["Next.js", "Node.js", "DevOps"],
    linkedin: "#",
    instagram: "#",
    image: "./assets/team/t3.jpg", // Replace with actual image path
  },
];

const operationsSupport = [
  {
    name: "Banshika Mittal",
    title: "Operations",
    description:
      "Owns SOPs, vendor onboarding, SLAs, and owner/student success at scale.",
    tags: ["SOPs", "Vendor Mgmt", "Support"],
    linkedin: "#",
    instagram: "#",
    image: "./assets/team/t5.jpg", // Replace with actual image path
  },
];
import React from "react";

const teamMembers = [
  {
    name: "Sachin Mavandiya",
    title: "Co-founder & CEO",
    description:
      "Sets vision and product strategy; drives partnerships, GTM, and growth.",
    tags: ["Vision", "Product", "Partnerships"],
    linkedin: "#",
    instagram: "#",
    image: "./assets/team/t1.jpg", // Replace with actual image path
  },
  {
    name: "Raksha Singh",
    title: "Co-founder & CFO",
    description:
      "Owns finance, compliance, and investor relations; ensures healthy unit economics.",
    tags: ["Finance", "Compliance", "Investor Relations"],
    linkedin: "#",
    instagram: "#",
    image: "./assets/team/t2.jpg", // Replace with actual image path
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 pb-10 px-4">
      <div className="relative flex flex-col items-center justify-center pt-32 pb-12">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{zIndex:0}}>
          <div className="w-[700px] h-[300px] bg-green-100 rounded-full blur-2xl opacity-40" style={{marginTop:'60px'}}></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            The team behind <span className="text-green-600">Hostro</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            We’re a lean, hands-on group of builders, designers, and operators focused on making PG & co-living simple and trustworthy.
          </p>
          <button className="border border-green-600 text-green-600 rounded-full px-6 py-2 mb-2 hover:bg-green-50 transition font-medium">
            Growing fast — see open roles
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-left">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-300 p-6 flex flex-row items-center min-h-[260px] shadow-sm">
              <div className="flex-shrink-0 mr-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-28 rounded-lg object-cover border border-gray-200"
                  style={{ background: '#f3f4f6' }}
                />
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-green-600 mb-2">{member.title}</p>
                <p className="text-sm text-gray-700 mb-3">{member.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {member.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="32" height="32" fill="currentColor" className="text-gray-500 hover:text-green-600"><circle cx="16" cy="16" r="16" fill="#f3f4f6"/><path d="M11.5 14.5v7h-2v-7h2zm-1-2a1 1 0 110-2 1 1 0 010 2zm4.5 2v7h-2v-7h2zm2 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v7h-2v-7h2z" fill="#333"/></svg>
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="32" height="32" fill="currentColor" className="text-gray-500 hover:text-green-600"><circle cx="16" cy="16" r="16" fill="#f3f4f6"/><path d="M20 10a2 2 0 012 2v6a2 2 0 01-2 2H12a2 2 0 01-2-2v-6a2 2 0 012-2h8zm-4 3a2 2 0 100 4 2 2 0 000-4zm4.5-.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill="#333"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

          {/* Engineering & Design Section */}
          <h2 className="text-3xl font-bold mt-16 mb-8 text-left">Engineering & Design</h2>
          <div className="flex flex-col justify-start">
            {engineeringDesign.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-300 p-6 flex flex-row items-center min-h-[220px] shadow-sm w-full max-w-xl mb-8">
                <div className="flex-shrink-0 mr-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-28 rounded-lg object-cover border border-gray-200"
                    style={{ background: '#f3f4f6' }}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-green-600 mb-2">{member.title}</p>
                  <p className="text-sm text-gray-700 mb-3">{member.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {member.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <svg width="32" height="32" fill="currentColor" className="text-gray-500 hover:text-green-600"><circle cx="16" cy="16" r="16" fill="#f3f4f6"/><path d="M11.5 14.5v7h-2v-7h2zm-1-2a1 1 0 110-2 1 1 0 010 2zm4.5 2v7h-2v-7h2zm2 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v7h-2v-7h2z" fill="#333"/></svg>
                    </a>
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <svg width="32" height="32" fill="currentColor" className="text-gray-500 hover:text-green-600"><circle cx="16" cy="16" r="16" fill="#f3f4f6"/><path d="M20 10a2 2 0 012 2v6a2 2 0 01-2 2H12a2 2 0 01-2-2v-6a2 2 0 012-2h8zm-4 3a2 2 0 100 4 2 2 0 000-4zm4.5-.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill="#333"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Operations & Support Section */}
          <h2 className="text-3xl font-bold mt-16 mb-8 text-left">Operations & Support</h2>
          <div className="flex flex-col justify-start">
            {operationsSupport.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-300 p-6 flex flex-row items-center min-h-[220px] shadow-sm w-full max-w-xl mb-8">
                <div className="flex-shrink-0 mr-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-28 rounded-lg object-cover border border-gray-200"
                    style={{ background: '#f3f4f6' }}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-green-600 mb-2">{member.title}</p>
                  <p className="text-sm text-gray-700 mb-3">{member.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {member.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <svg width="32" height="32" fill="currentColor" className="text-gray-500 hover:text-green-600"><circle cx="16" cy="16" r="16" fill="#f3f4f6"/><path d="M11.5 14.5v7h-2v-7h2zm-1-2a1 1 0 110-2 1 1 0 010 2zm4.5 2v7h-2v-7h2zm2 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v7h-2v-7h2z" fill="#333"/></svg>
                    </a>
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <svg width="32" height="32" fill="currentColor" className="text-gray-500 hover:text-green-600"><circle cx="16" cy="16" r="16" fill="#f3f4f6"/><path d="M20 10a2 2 0 012 2v6a2 2 0 01-2 2H12a2 2 0 01-2-2v-6a2 2 0 012-2h8zm-4 3a2 2 0 100 4 2 2 0 000-4zm4.5-.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill="#333"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Team;
