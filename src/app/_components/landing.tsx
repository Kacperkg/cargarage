import React from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Car, Heart, Star, Wrench, Github, FileText, Map } from "lucide-react";
import { SignedOut, SignInButton } from "@clerk/nextjs";

const Landing = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Navigation */}
      <nav className="border-border bg-bg2 border-b">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">CarVault</span>
          </div>
          <SignedOut>
            <SignInButton>
              <Button className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                Sign In with GitHub
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="from-accent-foreground to-accent mb-6 bg-gradient-to-r bg-clip-text text-6xl leading-normal font-bold text-transparent">
              Your Digital Garage
            </h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
              Track, manage, and showcase your car collection with precision.
              From dream cars to restoration projects, organize your automotive
              passion in one place.
            </p>
            <div className="flex items-center justify-center gap-4">
              <SignedOut>
                <SignInButton>
                  <Button className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Sign In with GitHub
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Everything You Need</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Comprehensive tools to manage your automotive collection, track
              maintenance, and plan your next acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-bg2 p-6 text-center transition-shadow hover:shadow-lg">
              <CardContent className="pt-6">
                <Car className="text-primary mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">
                  Garage Management
                </h3>
                <p className="text-muted-foreground">
                  Catalog your entire collection with detailed specs, photos,
                  and purchase history.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-bg2 p-6 text-center transition-shadow hover:shadow-lg">
              <CardContent className="pt-6">
                <Heart className="text-primary mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">
                  Dream Car Wishlist
                </h3>
                <p className="text-muted-foreground">
                  Keep track of cars you want to own and set goals for future
                  acquisitions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-bg2 p-6 text-center transition-shadow hover:shadow-lg">
              <CardContent className="pt-6">
                <Wrench className="text-primary mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">Project Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor restoration projects, modifications, and maintenance
                  schedules.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-bg2 p-6 text-center transition-shadow hover:shadow-lg">
              <CardContent className="pt-6">
                <Map className="text-primary mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">
                  Road Trip Planning
                </h3>
                <p className="text-muted-foreground">
                  Plan your next adventure! Create and track road trips with
                  routes, stops, and memories.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-bg2 p-6 text-center transition-shadow hover:shadow-lg">
              <CardContent className="pt-6">
                <Star className="text-primary mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">Set Your Goals</h3>
                <p className="text-muted-foreground">
                  Set your goals and track your progress towards them.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-bg2 p-6 text-center transition-shadow hover:shadow-lg">
              <CardContent className="pt-6">
                <FileText className="text-primary mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">Service Logs</h3>
                <p className="text-muted-foreground">
                  Keep detailed records of maintenance, repairs, and service
                  history for all your vehicles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-4xl font-bold">Ready to Start?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join automotive enthusiasts who trust CarVault to manage their
              collections.
            </p>
            <div className="mx-auto flex items-center justify-center gap-2">
              <SignedOut>
                <SignInButton>
                  <Button className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Sign In with GitHub
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-border border-t px-6 py-8">
        <div className="text-muted-foreground container mx-auto text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Car className="text-primary h-6 w-6" />
            <span className="text-lg font-semibold">CarVault</span>
          </div>
          <p>
            &copy; {new Date().getFullYear()} CarVault. Built for automotive
            enthusiasts.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
