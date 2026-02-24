export default function CurrentlyLearning() {
  const skills = [
    {
      id: 1,
      icon: '⚡',
      title: 'Next.js 14 & Server Components',
      description: 'Mastering the latest features of Next.js including server actions and streaming',
      progress: 70,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      icon: '📘',
      title: 'TypeScript Advanced Patterns',
      description: 'Deep diving into generics, utility types, and type-safe architecture',
      progress: 60,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 3,
      icon: '♿',
      title: 'Web Accessibility (WCAG)',
      description: 'Building inclusive experiences that work for everyone',
      progress: 50,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 4,
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Core Web Vitals, lazy loading, and advanced caching strategies',
      progress: 55,
      color: 'from-blue-500 to-purple-600'
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Currently Learning
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ✨ Committed to continuous growth and staying current with technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#112240] rounded-2xl p-8 hover:bg-[#1a2e4a] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl">{skill.icon}</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {skill.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>Progress</span>
                  <span className="font-bold">{skill.progress}%</span>
                </div>
                <div className="w-full h-3 bg-[#1e2a3a] rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-500`}
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center text-gray-400 italic">
          <span className="text-2xl">💡</span> This section demonstrates a{' '}
          <span className="font-bold text-white">growth mindset</span> — showing recruiters that I&apos;m actively investing in my skills and staying ahead of industry trends.
        </div>
      </div>
    </section>
  );
}
