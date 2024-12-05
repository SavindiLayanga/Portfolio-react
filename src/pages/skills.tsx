import '../styles/skill.css'; // Ensure this file is linked

const skillsData = [
    { name: 'Java', icon: '☕', count: '60%' },
    { name: 'HTML', icon: '🌐', count: '100%' },
    { name: 'JavaScript', icon: '📜', count: '80%' },
    { name: 'SQL', icon: '🛢', count: '90%' },
    { name: 'React', icon: '⚛', count: '70%' },
    { name: 'Node.js', icon: '🌲', count: '75%' },
    { name: 'CSS', icon: '🎨', count: '85%' },
    { name: 'Python', icon: '🐍', count: '65%' },
];

const Skills = () => {
    return (
        <div className="flex justify-center items-center py-8 bg-gray-200">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-10">
                {skillsData.map((skill, index) => (
                    <div
                        key={`${skill.name}-${index}`}
                        className="skill-card flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md"
                    >
                        <span style={{ fontSize: '24px' }} className="text-yellow-500">
                            {skill.icon}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">{skill.count}</h3>
                        <p className="text-lg text-gray-500">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
