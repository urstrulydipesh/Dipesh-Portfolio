import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';
import Link from 'next/link';

const experiences = [
  {
    role: 'Frontend Web Developer',
    company: 'IBM SkillsBuild (Remote)',
    period: 'June 2024 - August 2024',
    description:
      'Completed a structured internship under IBM SkillsBuild, gaining hands-on experience with HTML, CSS, JavaScript, and UI/UX principles. Built responsive web interfaces and interactive features while delivering high-quality, on-time project modules.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    certificateLink: 'YOUR_IBM_CERTIFICATE_LINK_HERE', // replace with real link
    completionDate: 'August 2024',
  },
  {
    role: 'Full Stack Web Developer',
    company: 'USICT — Academic Internship Project (Remote)',
    period: 'July 2025 - Present',
    description:
      'Developed a MERN-based medical appointment booking system with JWT authentication and role-based access (Patient/Doctor/Admin). Implemented doctor directory search, real-time scheduling with conflict detection, and responsive patient dashboards.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    certificateLink: 'YOUR_USICT_CERTIFICATE_LINK_HERE', // replace with real link
    completionDate: 'Ongoing',
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
        An overview of my professional journey, highlighting internships and impactful real-world projects that demonstrate both technical expertise and practical application.        </p>
      </div>
      <div className="relative mt-12 flow-root">
        <div className="-my-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative py-12">
              {index !== experiences.length - 1 && (
                <span
                  className="absolute left-10 top-10 -ml-px h-full w-0.5 bg-border"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex items-start space-x-3">
                {/* Icon */}
                <div>
                  <div className="relative px-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary ring-8 ring-background">
                      <Briefcase className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-accent">{exp.period}</p>
                  <Card className="relative mt-2 w-full hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out">
                    {/* Completion/Ongoing Sidebar */}
                    <div className="absolute top-4 right-4">
                      <Badge variant={exp.completionDate === 'Ongoing' ? 'default' : 'secondary'}>
                        {exp.completionDate}
                      </Badge>
                    </div>

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
                        <div className="mt-6 flex justify-center">
                          <Button asChild variant="outline" size="sm">
                            <Link
                              href={exp.certificateLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
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
