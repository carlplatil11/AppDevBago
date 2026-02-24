export default function FeaturedWork() {
  const projects = [
    {
      id: 1,
      type: 'Featured',
      icon: '⭐',
      title: 'E-Commerce Dashboard Redesign',
      description: 'Complete UI/UX overhaul increasing user conversion by 42% through intuitive navigation and data visualization.',
      date: 'November 2025',
      category: 'Client Project',
      badge: 'Featured'
    },
    {
      id: 2,
      type: 'Article',
      icon: '📝',
      title: 'Designing for Accessibility',
      description: 'Deep-dive article on WCAG 2.2 updates, color contrast strategies, and keyboard navigation patterns.',
      date: 'October 2025',
      category: 'Medium',
      badge: 'Article'
    },
    {
      id: 3,
      type: 'Podcast',
      icon: '🎙️',
      title: 'AI in UI Design — Future Talk',
      description: 'Podcast episode exploring how generative AI tools are reshaping prototyping and user testing workflows.',
      date: 'September 2025',
      category: 'Design Futures Pod',
      badge: 'Podcast'
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#112240]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Selected projects showcasing UI/UX craftsmanship, front-end development, and problem-solving through design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1e2a3a] rounded-2xl p-8 hover:bg-[#233147] transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{project.icon}</span>
                <span className="px-4 py-2 bg-[#0a192f] rounded-full text-sm text-gray-300 border border-gray-700">
                  {project.badge}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-700">
                <span>{project.date}</span>
                <span>•</span>
                <span>{project.category}</span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
