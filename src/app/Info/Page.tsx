import { SidebarProvider } from "~/components/ui/sidebar";
import { AppSidebar } from "~/app/_components/app-sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import {
  Heart,
  Users,
  Camera,
  BarChart3,
  Shield,
  Smartphone,
  Zap,
  Target,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

const plannedFeatures = [
  {
    title: "Advanced Photo Management",
    description:
      "AI-powered photo organization and tagging system to help you catalog your dream cars with professional-grade image management.",
    icon: Camera,
    timeframe: "Coming Soon",
  },
  {
    title: "Mobile Companion App",
    description:
      "Native iOS and Android app for managing your collection on the go, with offline sync and camera integration.",
    icon: Smartphone,
    timeframe: "Q2 2024",
  },
  {
    title: "Community Hub",
    description:
      "Connect with fellow automotive enthusiasts, share your collections, and discover new dream cars through our social features.",
    icon: Users,
    timeframe: "Q3 2024",
  },
  {
    title: "Market Analytics",
    description:
      "Real-time market value tracking, price predictions, and investment insights for your dream car collection.",
    icon: BarChart3,
    timeframe: "Q3 2024",
  },
  {
    title: "AI Assistant",
    description:
      "Personal AI assistant for car recommendations, market insights, and collection optimization suggestions.",
    icon: Zap,
    timeframe: "Q4 2024",
  },
  {
    title: "Enhanced Security",
    description:
      "Two-factor authentication, advanced privacy controls, and secure data encryption for your valuable collection data.",
    icon: Shield,
    timeframe: "Ongoing",
  },
];

const additionalFeatures = [
  "VR showroom experience for immersive car viewing",
  "Integration with major automotive marketplaces",
  "Custom collection sharing and embedding",
  "Advanced search and filtering capabilities",
  "Export tools for insurance and documentation",
  "Multi-language support",
  "Dark mode and accessibility improvements",
  "API access for developers",
  "Backup and restore functionality",
  "Premium analytics and reporting tools",
];

export default function About() {
  return (
    <SidebarProvider>
      <div className="from-background via-background to-muted/20 flex min-h-screen w-full bg-gradient-to-br">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Header */}
            <div className="space-y-6 text-center">
              <div className="from-primary/10 via-secondary/10 to-primary/10 border-primary/20 inline-flex items-center gap-3 rounded-2xl border bg-gradient-to-r p-4">
                <Heart className="text-primary h-8 w-8" />
                <h1 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
                  About Dream Garage
                </h1>
              </div>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
                Your personal automotive sanctuary where passion meets
                organization. Discover, collect, and manage your dream cars like
                never before.
              </p>
            </div>

            {/* Vision Section */}
            <Card className="border-primary/20 from-card via-card to-primary/5 border-2 bg-gradient-to-br">
              <CardHeader className="pb-6 text-center">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <Target className="text-primary h-6 w-6" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Dream Garage was born from a simple idea: every car enthusiast
                  deserves a beautiful, intuitive way to catalog and celebrate
                  their automotive dreams. Whether you're collecting vintage
                  classics, modern supercars, or planning your next purchase, we
                  provide the tools to turn your passion into an organized,
                  shareable experience.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that the journey of automotive appreciation should
                  be as exciting as the destination. That's why we're building
                  more than just a collection tool – we're creating a community
                  where car lovers can connect, discover, and dream together.
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
                  Exciting new capabilities coming to Dream Garage
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {plannedFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className="group hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
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
            <Card className="from-secondary/5 via-background to-primary/5 border-secondary/20 bg-gradient-to-r">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                  <CheckCircle className="text-secondary h-6 w-6" />
                  Additional Enhancements
                </CardTitle>
                <CardDescription className="text-base">
                  More features and improvements we're considering
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

            {/* Footer CTA */}
            <Card className="from-primary/10 via-secondary/10 to-primary/10 border-primary/20 bg-gradient-to-r text-center">
              <CardContent className="p-8">
                <h3 className="mb-3 text-xl font-semibold">Join the Journey</h3>
                <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
                  Dream Garage is constantly evolving based on our community's
                  needs and feedback. Your input helps shape the future of
                  automotive collection management.
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
                    <span className="text-muted-foreground">
                      Regular Updates
                    </span>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                    <span className="text-muted-foreground">
                      Community Driven
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
