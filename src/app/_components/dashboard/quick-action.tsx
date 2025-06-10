import { Car, Heart, Wrench, Map, Target, FileText, Plus } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import AddDreamCarForm from "./dream-car-form";
import AddProjectForm from "./add-project-form";
import AddRoadTripForm from "./add-road-trip-form";
import AddGoalForm from "./add-goal-form";
import AddServiceLogForm from "./add-service-log-form";
import ViewCarsDisplay from "./view-cars";
import QuickActionButtons from "./quick-action-button";
import { type ReactNode } from "react";

type DreamCarData = {
  make: string;
  model: string;
  year: number;
  hp: number;
  color?: string;
  description?: string;
  engineType?: string;
  transmissionType?: string;
};

type ProjectData = {
  name: string;
  carMake: string;
  carModel: string;
  projectType: string;
  budget: number;
  description: string;
  priority: string;
};

type RoadTripData = {
  name: string;
  startLocation: string;
  endLocation: string;
  startDate: string;
  endDate: string;
  distance: number;
  carUsed: string;
  description: string;
};

type GoalData = {
  title: string;
  category: string;
  targetDate: string;
  priority: string;
  description: string;
  targetValue?: string;
};

type ServiceLogData = {
  carId: string;
  serviceType: string;
  description: string;
  cost: number;
  mileage: number;
  serviceDate: string;
  serviceProvider: string;
  nextServiceDue?: string;
};

type QuickAction = {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
};

const quickActions: QuickAction[] = [
  {
    title: "Add Dream Car",
    description: "Add to wishlist",
    icon: <Heart className="h-5 w-5" />,
    color: "oklch(0.645 0.246 16.439)",
  },
  {
    title: "Projects",
    description: "Start Modifying",
    icon: <Wrench className="h-5 w-5" />,
    color: "oklch(0.769 0.188 70.08)",
  },
  {
    title: "Road Trips",
    description: "Track/Add Road Trips",
    icon: <Map className="h-5 w-5" />,
    color: "oklch(0.488 0.243 264.376)",
  },
  {
    title: "My Cars",
    description: "View Your Cars",
    icon: <Car className="h-5 w-5" />,
    color: "oklch(0.696 0.17 162.48)",
  },
  {
    title: "Goals",
    description: "Track Your Goals",
    icon: <Target className="h-5 w-5" />,
    color: "oklch(0.704 0.191 22.216)",
  },
  {
    title: "Service Log",
    description: "Track maintenance",
    icon: <FileText className="h-5 w-5" />,
    color: "oklch(0.627 0.265 303.9)",
  },
];

const QuickActions = () => {
  const handleDreamCarSubmit = (data: DreamCarData) => {
    console.log("Dream car data:", data);
    // Here you would typically save to your database
  };

  const handleProjectSubmit = (data: ProjectData) => {
    console.log("Project data:", data);
  };

  const handleRoadTripSubmit = (data: RoadTripData) => {
    console.log("Road trip data:", data);
  };

  const handleGoalSubmit = (data: GoalData) => {
    console.log("Goal data:", data);
  };

  const handleServiceLogSubmit = (data: ServiceLogData) => {
    console.log("Service log data:", data);
  };

  const renderDialogContent = (action: QuickAction) => {
    switch (action.title) {
      case "Add Dream Car":
        return (
          <AlertDialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto">
            <AlertDialogHeader>
              <AlertDialogTitle>Add Dream Car</AlertDialogTitle>
              <AlertDialogDescription asChild>
                <div>
                  <p className="text-muted-foreground mb-4">
                    Add a car to your dream collection. Fill in the details
                    below.
                  </p>
                  <AddDreamCarForm onSubmit={handleDreamCarSubmit} />
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction type="submit">Add Dream Car</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        );

      case "Projects":
        return (
          <AlertDialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto">
            <AlertDialogHeader>
              <AlertDialogTitle>Start New Project</AlertDialogTitle>
              <AlertDialogDescription asChild>
                <div>
                  <p className="text-muted-foreground mb-4">
                    Ready to modify your ride? Create a new project to track
                    your car modifications.
                  </p>
                  <AddProjectForm onSubmit={handleProjectSubmit} />
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Start Project</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        );

      case "Road Trips":
        return (
          <AlertDialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto">
            <AlertDialogHeader>
              <AlertDialogTitle>Plan Road Trip</AlertDialogTitle>
              <AlertDialogDescription asChild>
                <div>
                  <p className="text-muted-foreground mb-4">
                    Plan your next adventure! Create a new road trip to track
                    your journey and experiences.
                  </p>
                  <AddRoadTripForm onSubmit={handleRoadTripSubmit} />
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Plan Trip</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        );

      case "My Cars":
        return (
          <AlertDialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto">
            <AlertDialogHeader>
              <AlertDialogTitle>Your Garage</AlertDialogTitle>
              <AlertDialogDescription asChild>
                <div>
                  <ViewCarsDisplay />
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
              <AlertDialogAction>Manage Cars</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        );

      case "Goals":
        return (
          <AlertDialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto">
            <AlertDialogHeader>
              <AlertDialogTitle>Set New Goal</AlertDialogTitle>
              <AlertDialogDescription asChild>
                <div>
                  <p className="text-muted-foreground mb-4">
                    Track your automotive goals and achievements. Set milestones
                    for your car journey.
                  </p>
                  <AddGoalForm onSubmit={handleGoalSubmit} />
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Create Goal</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        );

      case "Service Log":
        return (
          <AlertDialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto">
            <AlertDialogHeader>
              <AlertDialogTitle>Log Service</AlertDialogTitle>
              <AlertDialogDescription asChild>
                <div>
                  <p className="text-muted-foreground mb-4">
                    Keep track of your vehicle maintenance. Log services,
                    repairs, and scheduled maintenance.
                  </p>
                  <AddServiceLogForm onSubmit={handleServiceLogSubmit} />
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Add Service</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="animate-fade-in bg-bg2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="text-primary h-5 w-5" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <AlertDialog key={index}>
              <AlertDialogTrigger asChild>
                <QuickActionButtons
                  title={action.title}
                  desc={action.description}
                  icon={action.icon}
                  color={action.color}
                />
              </AlertDialogTrigger>
              {renderDialogContent(action)}
            </AlertDialog>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
