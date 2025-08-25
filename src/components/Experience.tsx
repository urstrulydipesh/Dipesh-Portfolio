import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';
import Link from 'next/link';

const experiences = [
  {
    role: 'Frontend Web Developer',
    company: 'IBM SkillsBuild Remote',
    period: 'June 2024 - August 2024',
    description:
      'Completed a structured internship under IBM SkillsBuild, gaining hands-on experience with HTML, CSS, JavaScript, and UI/UX principles. Developed responsive web interfaces and interactive features using industry best practices. Received positive feedback for high-quality code, creativity, and consistent on-time delivery of all project modules.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    status: 'Completed',
    certificateLink: 'https://drive.google.com/file/d/1hlmmfGCFFcR_ugvddx5BJvwUs3XyTZy3/view', // Add certificate link
  },
  {
    role: 'Full Stack Web Developer',
    company: 'USICT — Academic Internship Project Remote',
    period: 'July 2025 - Present',
    description:
      'Built a MERN-based medical appointment booking system with JWT authentication and role-based access. Developed doctor directory with filters, real-time appointment scheduling with conflict detection, and a responsive patient dashboard. Automated booking workflows, reduced scheduling friction, and gained hands-on experience in RESTful API design and scalable systems.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'TailwindCSS'],
    status: 'Ongoing',
    certificateLink: '#', // Add certificate link
  },
];

export function Experience() {
  return (
    <section id="experience" className="container py-16 sm:py-20">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Work Experience
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          My professional journey and contributions across internships and real-world projects.
        </p>
      </div>
      <div className="relative mt-12 flow-root">
        <div className="-my-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative py-12">
              {index !== experiences.length - 1 && (
                <span className="absolute left-10 top-10 -ml-px h-full w-0.5 bg-border" aria-hidden="true" />
              )}
              <div className="relative flex flex-col sm:flex-row items-start sm:items-start sm:space-x-3">
                {/* Icon */}
                <div className="mb-4 sm:mb-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary ring-8 ring-background">
                    <Briefcase className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Main Card */}
                <div className="min-w-0 flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    {/* Period and Card */}
                    <p className="text-sm font-semibold text-accent mb-2 sm:mb-0">{exp.period}</p>

                    {/* Status Badge */}
                    <Badge
                      variant={exp.status === 'Completed' ? 'default' : 'secondary'}
                      className={`mb-2 sm:mb-0 ${
                        exp.status === 'Completed'
                          ? 'bg-green-500 text-white'
                          : 'bg-yellow-500 text-black'
                      }`}
                    >
                      {exp.status}
                    </Badge>
                  </div>

                  <Card className="mt-2 w-full hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out bg-card/60 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        {exp.tags.map(tag => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Certificate Button */}
                      {exp.certificateLink && (
                        <div className="mt-6 flex justify-end">
                          <Button asChild variant="outline" size="sm">
                            <Link href={exp.certificateLink} target="_blank" rel="noopener noreferrer">
                              View Certificate
                            </Link>
                          </Button>
                        </div>
                      )}
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
