import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Remote Internship',
    company: 'IBM SkillsBuild',
    period: "Aug '23 - Oct '23",
    description: 'Developed an innovative web application for visually impaired individuals, integrating speech-to-text and text-to-speech functionalities to enhance accessibility.',
    tags: ['Flask', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'TTS API'],
  },
  {
    role: 'Web Developer Intern',
    company: 'USICT, GGSIPU',
    period: "Jun '23 - Jul '23",
    description: 'Built a comprehensive Student Feedback Portal with features for login, registration, and feedback submission, improving the process of collecting student input.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Work Experience
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          My professional journey and what I've built along the way.
        </p>
      </div>
      <div className="relative mt-12 flow-root">
        <div className="-my-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative py-12">
              {index !== experiences.length - 1 && (
                <span className="absolute left-10 top-10 -ml-px h-full w-0.5 bg-border" aria-hidden="true" />
              )}
              <div className="relative flex items-start space-x-3">
                <div>
                  <div className="relative px-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary ring-8 ring-background">
                      <Briefcase className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-accent">{exp.period}</p>
                  <Card className="mt-2 w-full">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
