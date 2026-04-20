import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';
import Link from 'next/link';

const experiences = [
  {
    role: 'Associate 1',
    company: 'PwC India (Acceleration Center)',
    period: 'April 2026 - Present',
    description:
      'Working in the Digital Assurance & Transparency (DAT) team, performing controls testing and supporting audit processes including risk assessments and compliance evaluations. Assisting in evaluating design and operating effectiveness of IT and business controls for SOX and SOC engagements, while building expertise in internal controls and audit methodologies. Collaborating with teams to analyze data, support client walkthroughs, and identify process improvements while adhering to risk management and compliance standards.',
    tags: ['Digital Assurance', 'Audit', 'Controls Testing', 'SOX', 'SOC', 'Compliance', 'Risk Management'],
    status: 'Current',
    certificateLink: 'https://www.linkedin.com/posts/urstrulydipesh_pwc-big4-dat-ugcPost-7447285021486497793-sJDs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8kvmgBhukukGptBRtf_mAKeDS9giCmD4U',
  },
  {
    role: 'SaaS Developer',
    company: 'USICT — Major Academic Project',
    period: 'January 2026 - May 2026',
    description:
      'Developed a cloud-based SaaS code editor enabling users to write, execute, and manage code directly in the browser with real-time output, eliminating the need for local development environments. Engineered a secure sandboxed execution engine supporting multiple programming languages, ensuring isolated runtime environments with efficient error handling and execution control. Gained hands-on experience with modern cloud technologies and SaaS architecture principles.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Convex', 'Clerk Auth', 'Node.js', 'Cloud Services'],
    status: 'Current',
    certificateLink: '',
  },
  {
    role: 'Full Stack Web Developer',
    company: 'USICT — Minor Academic Project ',
    period: 'July 2025 - November 2025',
    description:
      'Built a MERN-based medical appointment booking system with JWT authentication and role-based access. Developed doctor directory with filters, real-time appointment scheduling with conflict detection, and a responsive patient dashboard. Automated booking workflows, reduced scheduling friction, and gained hands-on experience in RESTful API design and scalable systems.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'TailwindCSS'],
    status: 'Completed',
    certificateLink: 'https://drive.google.com/file/d/1ieGq-u-TDeJ3zIKOJwSYJReJAeoc5af9/view?usp=drive_link', // Add certificate link
  },
  {
    role: 'Frontend Web Developer',
    company: 'IBM ',
    period: 'June 2024 - August 2024',
    description:
      'Completed a structured internship under IBM SkillsBuild, gaining hands-on experience with HTML, CSS, JavaScript, and UI/UX principles. Developed responsive web interfaces and interactive features using industry best practices. Received positive feedback for high-quality code, creativity, and consistent on-time delivery of all project modules.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    status: 'Completed',
    certificateLink: 'https://drive.google.com/file/d/1hlmmfGCFFcR_ugvddx5BJvwUs3XyTZy3/view', // Add certificate link
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
                          : exp.status === 'Current'
                          ? 'bg-yellow-500 text-black'
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
                      {exp.certificateLink !== undefined && (
                        <div className="mt-6 flex justify-end">
                          <Button asChild variant="outline" size="sm" disabled={!exp.certificateLink}>
                            <Link href={exp.certificateLink || '#'} target={exp.certificateLink ? '_blank' : undefined} rel={exp.certificateLink ? 'noopener noreferrer' : undefined}>
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
