import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import {
  Users,
  Camera,
  Target,
  Lightbulb,
  CheckCircle,
  MapPin,
  Wrench,
  Share2,
} from "lucide-react";

const plannedFeatures = [
  {
    title: "Photo Management",
    description:
      "Upload and organize photos of your cars with drag-and-drop functionality, multiple image support, and easy gallery management.",
    icon: Camera,
    timeframe: "Coming Soon",
  },
  {
    title: "Road Trip Planning",
    description:
      "Plan and organize road trips with route optimization, fuel cost calculations, and integration with your car collection for the perfect journey.",
    icon: MapPin,
    timeframe: "Planned",
  },
  {
    title: "Goals & Milestones",
    description:
      "Set automotive goals, track progress towards dream cars, and celebrate milestones in your car enthusiast journey.",
    icon: Target,
    timeframe: "Planned",
  },
  {
    title: "Project Cars",
    description:
      "Track modifications, maintenance logs, and progress on your project cars with detailed documentation and photo galleries.",
    icon: Wrench,
    timeframe: "Planned",
  },
  {
    title: "Share Collections",
    description:
      "Share your dream cars and current collection with friends, family, and the automotive community through customizable profiles.",
    icon: Share2,
    timeframe: "Planned",
  },
  {
    title: "Community Hub",
    description:
      "Connect with fellow automotive enthusiasts, share your collections, and discover new dream cars through our social features.",
    icon: Users,
    timeframe: "Planned",
  },
];

const techStack = [
  {
    name: "Next.js 14",
    description:
      "React framework with App Router for server-side rendering and optimal performance",
    category: "Framework",
    icon: "⚡",
  },
  {
    name: "TypeScript",
    description:
      "Type-safe JavaScript for better development experience and fewer runtime errors",
    category: "Language",
    icon: "🔷",
  },
  {
    name: "tRPC",
    description:
      "End-to-end typesafe APIs without GraphQL, ensuring type safety between client and server",
    category: "API",
    icon: "🔄",
  },
  {
    name: "Prisma",
    description:
      "Modern database toolkit with type-safe database access and migrations",
    category: "Database",
    icon: "🗄️",
  },
  {
    name: "Clerk",
    description:
      "Authentication and user management with pre-built components and security",
    category: "Auth",
    icon: "🔐",
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first CSS framework for rapid UI development and consistent design",
    category: "Styling",
    icon: "🎨",
  },
  {
    name: "shadcn/ui",
    description: "Re-usable components built with Radix UI and Tailwind CSS",
    category: "UI Components",
    icon: "🧩",
  },
  {
    name: "Supabase",
    description:
      "Open-source Firebase alternative with PostgreSQL database, real-time subscriptions, and built-in auth",
    category: "Database",
    icon: "🚀",
  },
  {
    name: "PostgreSQL",
    description:
      "Reliable, open-source database for storing car data and user information",
    category: "Database",
    icon: "🐘",
  },
];

const additionalFeatures = [
  "UI/UX Improvements",
  "Performance Optimizations",
  "Bug Fixes & Stability",
  "Mobile Responsiveness",
  "Accessibility Enhancements",
  "Code Refactoring",
  "Database Optimization",
  "Security Updates",
  "Loading Speed Improvements",
  "Error Handling",
];

export default function About() {
  return (
    <main className="flex-1 p-8">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold">About CarVault</h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
            Your personal automotive sanctuary where passion meets organization.
            Discover, collect, and manage your dream cars like never before.
          </p>
        </div>

        {/* Vision Section */}
        <Card className="border-primary/20 bg-bg2 bg-bg2">
          <CardHeader className="pb-6 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <Target className="text-primary h-6 w-6" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-center">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              CarVault started with a simple thought: why not have a cool way to
              track the cars you actually own? And hey, while we&apos;re at it,
              why not keep a dream cars list too? We&apos;re also looking into
              adding project cars where you can log all your mods and upgrades,
              plus the ability to add service logs and upload proof of work
              done. Basically, we wanted to create something that makes managing
              your automotive life way easier and more fun.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We think the journey of loving cars should be just as fun as
              getting to your dream ride. That&apos;s why we&apos;re building
              more than just a place to list your cars – we&apos;re hoping to
              create a community where car people can hang out, find cool stuff,
              and maybe even connect with other enthusiasts someday.
            </p>
          </CardContent>
        </Card>

        {/* Planned Features */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <Lightbulb className="text-secondary h-6 w-6" />
              <h2 className="text-3xl font-bold">Planned Features</h2>
            </div>
            <p className="text-muted-foreground">
              Exciting new capabilities coming to CarVault
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {plannedFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group hover:border-primary/30 bg-bg2 transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader className="pb-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 rounded-xl bg-gradient-to-br p-3 transition-all duration-300">
                      <feature.icon className="text-primary h-6 w-6" />
                    </div>

                    {feature.timeframe}
                  </div>
                  <CardTitle className="group-hover:text-primary text-xl transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <Card className="border-secondary/20 bg-bg2">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3 text-2xl">
              <CheckCircle className="text-secondary h-6 w-6" />
              Additional Enhancements
            </CardTitle>
            <CardDescription className="text-base">
              More features and improvements we&apos;re considering
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2">
              {additionalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="hover:bg-muted/30 flex items-center gap-3 rounded-lg p-3 transition-colors"
                >
                  <div className="from-primary to-secondary h-2 w-2 rounded-full bg-gradient-to-r"></div>
                  <span className="text-muted-foreground text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tech Stack Section */}
        <Card className="border-primary/20 bg-bg2">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3 text-2xl">
              <Wrench className="text-primary h-6 w-6" />
              Technology Stack
            </CardTitle>
            <CardDescription className="text-base">
              Modern tools and technologies powering CarVault
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="hover:bg-muted/30 group border-border/50 rounded-lg border p-4 transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{tech.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold">{tech.name}</h4>
                      <p className="text-muted-foreground mt-1 text-xs">
                        {tech.description}
                      </p>
                      <span className="bg-primary/10 text-primary mt-2 inline-block rounded-full px-2 py-1 text-xs">
                        {tech.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer CTA */}
        <Card className="border-primary/20 bg-bg2 text-center">
          <CardContent className="p-8">
            <h3 className="mb-3 text-xl font-semibold">
              Start Your Collection
            </h3>
            <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
              CarVault is your personal automotive sanctuary. Track your dream
              cars, manage your collection, and keep your automotive journey
              organized in one beautiful, intuitive platform.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <span className="text-muted-foreground">
                  Always Free Core Features
                </span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                <span className="text-muted-foreground">Regular Updates</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                <span className="text-muted-foreground">
                  Personal & Private
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
