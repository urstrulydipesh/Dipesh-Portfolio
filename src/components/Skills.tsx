
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const skillsData = {
  Languages: ['C', 'C++', 'Java', 'Python', 'PHP', 'JavaScript'],
  Tools: ['GIT', 'GitHub', 'Google Colab', 'VS Code', 'Jupyter Notebook'],
  Database: ['MySQL', 'MongoDB', 'Firebase'],
  Frontend: [
    'HTML',
    'CSS',
    'JavaScript',
    'Bootstrap',
    'Tailwind CSS',
    'ReactJs',
    'BootStrap Studio',
  ],
  Backend: ['PHP', 'NodeJs', 'REST APIs', 'Socket.io'],
  'Soft Skills': [
    'Leadership',
    'Event Management',
    'Writing',
    'Public Speaking',
    'Time Management',
  ],
};

export function Skills() {
  return (
    <section
      id="skills"
      className="container py-16 sm:py-20 relative overflow-hidden"
    >
      {/* Subtle purple background animation like Projects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-purple-400/10 blur-2xl animate-pulse"></div>
      </div>

      {/* Title */}
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Skills & Technologies
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
        I am proficient in leveraging a wide range of technologies to deliver efficient and reliable solutions. I continuously adapt to emerging trends and tools, ensuring my work remains modern and impactful. My approach emphasizes precision, adaptability, and a strong drive for innovation.        </p>
      </div>

      {/* Skills Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skillsData).map(([category, skills]) => (
          <Card
            key={category}
            className="group relative overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 bg-card/60 backdrop-blur-sm"
          >
            <CardContent className="relative z-10 pt-6">
              <h3 className="font-headline text-lg font-semibold text-accent mb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="default"
                    className="text-sm transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:scale-110"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
