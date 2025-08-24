import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Award, BookOpenCheck, Users } from 'lucide-react';

const achievements = [
  {
    icon: <BookOpenCheck className="h-8 w-8 text-accent" />,
    title: 'Web Development with React',
    source: 'Coursera',
    description: 'Completed a comprehensive course on modern web development using React and its ecosystem.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'ACM & IEEE Member',
    source: 'Professional Organizations',
    description: 'Active member of the Association for Computing Machinery and the Institute of Electrical and Electronics Engineers.',
  },
   {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: "Dean's List for Academic Excellence",
    source: 'University Award',
    description: 'Recognized for outstanding academic performance during my undergraduate studies.',
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Achievements & Activities
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Certifications, awards, and community involvement.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item) => (
          <Card key={item.title} className="transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
            <CardHeader className="flex flex-row items-center gap-4">
              {item.icon}
              <div>
                <CardTitle className="font-headline">{item.title}</CardTitle>
                <CardDescription>{item.source}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
