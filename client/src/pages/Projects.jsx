import centinelImg from '../assets/project1.png';

const projects = [
  {
    title: 'Centinel',
    image: centinelImg,
    desc: 'Emergency alert app for schools and campuses.',
    type: 'image',
  },
  {
    title: 'Pokédex Search',
    github: 'https://github.com/tobi-kyle/PokeDex-project', 
    desc: 'React app fetching real-time Pokémon data.',
    type: 'link',
  },
  {
    title: 'Calculator',
    github: 'https://github.com/tobi-kyle/CalculatorDemo', 
    desc: 'A GUI calculator built using C# and Windows Forms.',
    type: 'link',
  },
];


export default function Projects() {
  return (
    <div className="container projects">
      <h1>Projects</h1>
      {projects.map((proj, i) => (
        <div key={i} className="project">
          <h2>{proj.title}</h2>

          {proj.type === 'image' && (
            <img src={proj.image} alt={proj.title} className="centinel-img" />
          )}

          {proj.type === 'link' && (
            <a href={proj.github} target="_blank" rel="noreferrer" className="btn">
              View on GitHub
            </a>
          )}

          <p>{proj.desc}</p>
        </div>
      ))}
    </div>
  );
}

