import React, { useState } from "react";
import {
  Users,
  Award,
  Linkedin,
  Github,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Star,
  Heart,
  Lightbulb,
  Target,
  TrendingUp,
  Code,
  Cpu,
  Battery,
  Leaf,
  Globe,
  ChevronRight,
  ExternalLink,
  Quote,
} from "lucide-react";

export default function Team() {
  const [selectedTab, setSelectedTab] = useState("team");
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Project Lead & Research Director",
      department: "Electrical Engineering",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80",
      expertise: [
        "Piezoelectric Systems",
        "Energy Harvesting",
        "Smart Materials",
      ],
      bio: "Leading researcher in piezoelectric energy harvesting with 8+ years of experience in sustainable technology development. Published 15+ papers on energy conversion systems.",
      education: "Ph.D. Electrical Engineering, MIT",
      achievements: [
        "IEEE Young Investigator Award 2022",
        "15+ published research papers",
        "Patent holder for 3 energy harvesting technologies",
        "TEDx speaker on sustainable technology",
      ],
      contact: {
        email: "sarah.chen@smartbricks.edu",
        linkedin: "linkedin.com/in/sarahchen",
        github: "github.com/sarahchen",
      },
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      role: "Hardware Engineering Lead",
      department: "Mechatronics Engineering",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      expertise: ["Arduino Development", "Circuit Design", "IoT Integration"],
      bio: "Expert in microcontroller programming and embedded systems design. Specialized in creating efficient, low-power IoT solutions for energy monitoring applications.",
      education: "M.S. Mechatronics Engineering, Stanford",
      achievements: [
        "Designed 50+ IoT sensor networks",
        "Arduino community contributor",
        "Winner of National Robotics Competition 2021",
        "Published author on embedded systems",
      ],
      contact: {
        email: "alex.rodriguez@smartbricks.edu",
        linkedin: "linkedin.com/in/alexrodriguez",
        github: "github.com/alexrodriguez",
      },
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Sustainability Coordinator",
      department: "Environmental Science",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      expertise: [
        "Circular Economy",
        "Waste Management",
        "Life Cycle Assessment",
      ],
      bio: "Environmental scientist focused on circular economy solutions and sustainable material science. Leads our plastic recycling and environmental impact initiatives.",
      education: "M.S. Environmental Science, UC Berkeley",
      achievements: [
        "Developed plastic recycling protocol",
        "Environmental impact assessment expert",
        "Sustainability consultant for 20+ companies",
        "Published researcher in green technology",
      ],
      contact: {
        email: "emma.thompson@smartbricks.edu",
        linkedin: "linkedin.com/in/emmathompson",
      },
    },
    {
      id: 4,
      name: "David Kim",
      role: "Software Development Lead",
      department: "Computer Science",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      expertise: [
        "Full-Stack Development",
        "Data Analytics",
        "Cloud Architecture",
      ],
      bio: "Full-stack developer with expertise in real-time data processing and cloud infrastructure. Builds scalable solutions for IoT data management and visualization.",
      education: "B.S. Computer Science, Carnegie Mellon",
      achievements: [
        "Built 10+ scalable web applications",
        "Cloud architecture certified (AWS, Azure)",
        "Open source contributor (5000+ GitHub stars)",
        "Hackathon winner (3x)",
      ],
      contact: {
        email: "david.kim@smartbricks.edu",
        linkedin: "linkedin.com/in/davidkim",
        github: "github.com/davidkim",
      },
    },
    {
      id: 5,
      name: "Maria Santos",
      role: "Business Development Manager",
      department: "Business Administration",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      expertise: [
        "Strategic Planning",
        "Partnership Development",
        "Market Analysis",
      ],
      bio: "Business strategist with experience in cleantech startups and sustainable technology commercialization. Leads partnerships and market expansion efforts.",
      education: "MBA, Wharton School",
      achievements: [
        "Secured $2M+ in project funding",
        "Established 15+ industry partnerships",
        "Launched products in 5 international markets",
        "Featured in Forbes 30 Under 30",
      ],
      contact: {
        email: "maria.santos@smartbricks.edu",
        linkedin: "linkedin.com/in/mariasantos",
      },
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Data Scientist",
      department: "Data Science & Analytics",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      expertise: [
        "Machine Learning",
        "Predictive Analytics",
        "Data Visualization",
      ],
      bio: "Data scientist specializing in IoT analytics and predictive modeling for energy systems. Develops algorithms for optimizing energy generation and consumption patterns.",
      education: "Ph.D. Data Science, NYU",
      achievements: [
        "Developed ML models with 95%+ accuracy",
        "Published 8+ papers on IoT analytics",
        "Kaggle competition winner (2x)",
        "AI/ML conference speaker",
      ],
      contact: {
        email: "james.wilson@smartbricks.edu",
        linkedin: "linkedin.com/in/jameswilson",
        github: "github.com/jameswilson",
      },
    },
  ];

  const mentors = [
    {
      id: 1,
      name: "Prof. Michael Zhang",
      title: "Dean of Engineering",
      institution: "Massachusetts Institute of Technology",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
      expertise: "Renewable Energy Systems, Smart Grid Technology",
      contribution:
        "Strategic guidance on technology development and research direction",
      bio: "Renowned expert in renewable energy systems with 20+ years of research experience. Former chief scientist at Department of Energy.",
      achievements: [
        "100+ published research papers",
        "National Academy of Engineering member",
        "$50M+ research grants secured",
        "Advisor to 3 successful cleantech startups",
      ],
    },
    {
      id: 2,
      name: "Dr. Lisa Johnson",
      title: "Senior Research Scientist",
      institution: "Google Research",
      image:
        "https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=400&q=80",
      expertise: "IoT Systems, Machine Learning, Data Analytics",
      contribution:
        "Technical mentorship on IoT integration and ML applications",
      bio: "Leading researcher in IoT and ML applications for environmental monitoring. Previously led sustainability initiatives at major tech companies.",
      achievements: [
        "Led 5+ breakthrough IoT projects",
        "25+ patents in IoT and ML",
        "Technology Review Innovator Under 35",
        "Keynote speaker at major tech conferences",
      ],
    },
    {
      id: 3,
      name: "Robert Martinez",
      title: "Founding Partner",
      institution: "GreenTech Ventures",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&q=80",
      expertise: "Cleantech Investment, Startup Scaling, Market Strategy",
      contribution:
        "Business mentorship and funding guidance for project commercialization",
      bio: "Veteran investor and entrepreneur in cleantech sector. Successfully funded and scaled 15+ sustainable technology startups.",
      achievements: [
        "$500M+ invested in cleantech",
        "15 successful startup exits",
        "Board member at 20+ companies",
        "Cleantech industry thought leader",
      ],
    },
    {
      id: 4,
      name: "Dr. Angela Foster",
      title: "Director of Sustainability",
      institution: "United Nations Environment Programme",
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80",
      expertise: "Environmental Policy, Sustainable Development, Global Impact",
      contribution:
        "Guidance on environmental impact assessment and global deployment strategies",
      bio: "International expert on sustainable development and environmental policy. Leads global initiatives on circular economy and clean energy adoption.",
      achievements: [
        "Led 10+ global sustainability programs",
        "Advisor to 50+ governments on climate policy",
        "Author of UN sustainability framework",
        "Time Magazine Climate Leader 2023",
      ],
    },
  ];

  const collaborators = [
    {
      name: "Massachusetts Institute of Technology",
      type: "Research Institution",
      logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&q=80",
      contribution:
        "Advanced materials research and piezoelectric technology development",
    },
    {
      name: "Stanford University",
      type: "Academic Partner",
      logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=200&q=80",
      contribution:
        "IoT systems research and sustainable engineering solutions",
    },
    {
      name: "Tesla Energy Division",
      type: "Industry Partner",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&q=80",
      contribution: "Battery technology expertise and energy storage solutions",
    },
    {
      name: "United Nations Environment Programme",
      type: "International Organization",
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&q=80",
      contribution:
        "Global sustainability framework and environmental impact guidance",
    },
    {
      name: "Local Waste Management Authority",
      type: "Municipal Partner",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80",
      contribution:
        "Plastic waste collection and recycling infrastructure support",
    },
    {
      name: "Smart City Initiative",
      type: "Government Program",
      logo: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=200&q=80",
      contribution: "Urban deployment opportunities and regulatory support",
    },
  ];

  const teamStats = {
    totalMembers: teamMembers.length,
    avgExperience: "5+ years",
    publications: 45,
    patents: 8,
    awards: 12,
    collaborations: collaborators.length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-4">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">Meet Our Team</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold">
              Innovators Behind
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Smart Energy Bricks
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the passionate team of engineers, scientists, and visionaries
              working together to revolutionize sustainable energy through
              innovative piezoelectric brick technology.
            </p>

            {/* Team Stats */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">
                  {teamStats.totalMembers}
                </div>
                <div className="text-sm text-gray-300">Team Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">
                  {teamStats.avgExperience}
                </div>
                <div className="text-sm text-gray-300">Avg Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400">
                  {teamStats.publications}
                </div>
                <div className="text-sm text-gray-300">Publications</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-orange-400">
                  {teamStats.patents}
                </div>
                <div className="text-sm text-gray-300">Patents</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-pink-400">
                  {teamStats.awards}
                </div>
                <div className="text-sm text-gray-300">Awards</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400">
                  {teamStats.collaborations}
                </div>
                <div className="text-sm text-gray-300">Collaborations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <div className="flex space-x-2">
                {[
                  {
                    id: "team",
                    name: "Core Team",
                    icon: <Users className="w-5 h-5" />,
                  },
                  {
                    id: "mentors",
                    name: "Mentors & Advisors",
                    icon: <GraduationCap className="w-5 h-5" />,
                  },
                  {
                    id: "collaborators",
                    name: "Partners & Collaborators",
                    icon: <Globe className="w-5 h-5" />,
                  },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                      selectedTab === tab.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Tab */}
      {selectedTab === "team" && (
        <section className="pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            {selectedMember ? (
              // Detailed Member View
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white">
                    <button
                      onClick={() => setSelectedMember(null)}
                      className="mb-6 flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 transform rotate-180" />
                      <span>Back to Team</span>
                    </button>

                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-white/20"
                    />

                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">
                        {selectedMember.name}
                      </h3>
                      <p className="text-blue-200 mb-4">
                        {selectedMember.role}
                      </p>
                      <p className="text-blue-100 text-sm">
                        {selectedMember.department}
                      </p>
                    </div>

                    <div className="mt-8 space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Education</h4>
                        <p className="text-sm text-blue-100">
                          {selectedMember.education}
                        </p>
                      </div>

                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedMember.expertise.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-white/20 px-2 py-1 rounded text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Contact</h4>
                        <div className="space-y-2">
                          <a
                            href={`mailto:${selectedMember.contact.email}`}
                            className="flex items-center space-x-2 text-sm hover:text-blue-200"
                          >
                            <Mail className="w-4 h-4" />
                            <span>Email</span>
                          </a>
                          {selectedMember.contact.linkedin && (
                            <a
                              href="#"
                              className="flex items-center space-x-2 text-sm hover:text-blue-200"
                            >
                              <Linkedin className="w-4 h-4" />
                              <span>LinkedIn</span>
                            </a>
                          )}
                          {selectedMember.contact.github && (
                            <a
                              href="#"
                              className="flex items-center space-x-2 text-sm hover:text-blue-200"
                            >
                              <Github className="w-4 h-4" />
                              <span>GitHub</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-8">
                    <h4 className="text-2xl font-bold text-gray-800 mb-6">
                      About {selectedMember.name}
                    </h4>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {selectedMember.bio}
                    </p>

                    <div>
                      <h5 className="text-xl font-semibold text-gray-800 mb-4">
                        Key Achievements
                      </h5>
                      <div className="grid gap-4">
                        {selectedMember.achievements.map(
                          (achievement, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">
                                {achievement}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Team Grid View
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Our Core Team
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Multidisciplinary experts bringing together engineering,
                    sustainability, and innovation.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                      onClick={() => setSelectedMember(member)}
                    >
                      <div className="relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ChevronRight className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-medium mb-3">
                          {member.role}
                        </p>
                        <p className="text-gray-500 text-sm mb-4">
                          {member.department}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {member.expertise.slice(0, 2).map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                          {member.expertise.length > 2 && (
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                              +{member.expertise.length - 2} more
                            </span>
                          )}
                        </div>

                        <div className="flex items-center space-x-3">
                          <button className="text-gray-400 hover:text-blue-600 transition-colors">
                            <Mail className="w-4 h-4" />
                          </button>
                          {member.contact.linkedin && (
                            <button className="text-gray-400 hover:text-blue-600 transition-colors">
                              <Linkedin className="w-4 h-4" />
                            </button>
                          )}
                          {member.contact.github && (
                            <button className="text-gray-400 hover:text-blue-600 transition-colors">
                              <Github className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Mentors Tab */}
      {selectedTab === "mentors" && (
        <section className="pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Mentors & Advisors
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Distinguished experts and industry leaders guiding our research
                and development efforts.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {mentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <div className="flex items-start space-x-6">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                    />

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {mentor.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-1">
                        {mentor.title}
                      </p>
                      <p className="text-gray-500 mb-4">{mentor.institution}</p>

                      <div className="bg-blue-50 rounded-lg p-3 mb-4">
                        <p className="text-sm text-gray-700">
                          <strong>Expertise:</strong> {mentor.expertise}
                        </p>
                      </div>

                      <p className="text-gray-600 text-sm mb-4">{mentor.bio}</p>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Key Achievements
                        </h4>
                        <div className="space-y-1">
                          {mentor.achievements
                            .slice(0, 3)
                            .map((achievement, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                                <span className="text-sm text-gray-600">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">
                        Contribution to Project
                      </h4>
                      <p className="text-green-700 text-sm">
                        {mentor.contribution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Collaborators Tab */}
      {selectedTab === "collaborators" && (
        <section className="pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Partners & Collaborators
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Strategic partnerships with leading institutions, organizations,
                and companies driving innovation forward.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collaborators.map((collaborator, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={collaborator.logo}
                      alt={collaborator.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {collaborator.name}
                      </h3>
                      <p className="text-blue-600 text-sm">
                        {collaborator.type}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm">
                    {collaborator.contribution}
                  </p>

                  <div className="mt-4 flex items-center space-x-2 text-blue-600 hover:text-blue-700 cursor-pointer">
                    <span className="text-sm font-medium">Learn more</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Collaboration Benefits */}
            <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Why We Partner
                </h3>
                <p className="text-gray-600">
                  Collaborative innovation accelerates breakthrough solutions
                  and maximizes global impact.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Shared Expertise
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Combining diverse knowledge and experience for comprehensive
                    solutions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Accelerated Innovation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Faster development cycles and breakthrough discoveries
                    through collaboration.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Global Impact
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Worldwide deployment and scaling through strategic
                    partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Join Our Team CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8">
            Be part of the team revolutionizing sustainable energy. We're always
            looking for passionate individuals who want to make a positive
            impact on the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              View Open Positions
            </button>
            <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
