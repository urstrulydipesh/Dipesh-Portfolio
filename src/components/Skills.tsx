import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsData = {
  Languages: ['C', 'C++', 'Java', 'JavaScript', 'Python', 'HTML', 'CSS', 'SQL'],
  Frontend: ['React', 'Redux', 'Tailwind CSS', 'Bootstrap'],
  Backend: ['Node.js', 'Express.js'],
  Databases: ['MongoDB', 'MySQL'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'MongoDB Compass', 'Canva'],
  'Soft Skills': ['Teamwork', 'Leadership', 'Communication', 'Problem-solving'],
};

export function Skills() {
  return (
    <section id="skills" className="container bg-card py-24 sm:py-32">
       <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Skills & Technologies
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          The tools and technologies I use to bring ideas to life.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h3 className="font-headline text-lg font-semibold text-accent mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => <Badge key={skill} variant="default" className="text-sm">{skill}</Badge>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
