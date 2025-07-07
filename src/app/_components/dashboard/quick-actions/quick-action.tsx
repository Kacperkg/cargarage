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
import AddDreamCarForm from "~/app/_components/dashboard/forms/add-dream-car-form";
import AddProjectForm from "~/app/_components/dashboard/forms/add-project-form";
import AddRoadTripForm from "~/app/_components/dashboard/forms/add-road-trip-form";
import AddGoalForm from "~/app/_components/dashboard/forms/add-goal-form";
import AddServiceLogForm from "~/app/_components/dashboard/forms/add-service-log-form";
import ViewCarsDisplay from "~/app/_components/dashboard/view-cars";
import QuickActionButtons from "~/app/_components/dashboard/quick-actions/quick-action-button";
import type { QuickAction } from "~/utils/types";
import { useRouter } from "next/navigation";

const quickActions: QuickAction[] = [
  {
    title: "Add Dream Car",
    icon: <Heart className="h-5 w-5" />,
    color: "oklch(0.645 0.246 16.439)",
  },
  // {
  //   title: "Projects",
  //   icon: <Wrench className="h-5 w-5" />,
  //   color: "oklch(0.769 0.188 70.08)",
  // },
  // {
  //   title: "Road Trips",
  //   icon: <Map className="h-5 w-5" />,
  //   color: "oklch(0.488 0.243 264.376)",
  // },
  {
    title: "My Cars",
    icon: <Car className="h-5 w-5" />,
    color: "oklch(0.696 0.17 162.48)",
  },
  // {
  //   title: "Goals",
  //   icon: <Target className="h-5 w-5" />,
  //   color: "oklch(0.704 0.191 22.216)",
  // },
  // {
  //   title: "Service Log",
  //   icon: <FileText className="h-5 w-5" />,
  //   color: "oklch(0.627 0.265 303.9)",
  // },
];

const QuickActions = () => {
  const router = useRouter();
  const dialogConfigs = {
    "Add Dream Car": {
      title: "Add Dream Car",
      description:
        "Add a car to your dream collection. Fill in the details below.",
      form: <AddDreamCarForm />,
      submitButton: {
        text: "Add Dream Car",
        type: "submit",
        form: "dream-car-form",
        onClick: (e: React.MouseEvent) => {
          const form = document.getElementById(
            "dream-car-form",
          ) as HTMLFormElement;
          if (!form.checkValidity()) {
            e.preventDefault();
            form.reportValidity();
          }
        },
      },
    },
    Projects: {
      title: "Start New Project",
      description:
        "Ready to modify your ride? Create a new project to track your car modifications.",
      form: <AddProjectForm />,
      submitButton: {
        text: "Start Project",
        type: "submit",
        form: "project-form",
        onClick: (e: React.MouseEvent) => {
          const form = document.getElementById(
            "project-form",
          ) as HTMLFormElement;
          if (!form.checkValidity()) {
            e.preventDefault();
            form.reportValidity();
          }
        },
      },
    },
    "Road Trips": {
      title: "Plan Road Trip",
      description:
        "Plan your next adventure! Create a new road trip to track your journey and experiences.",
      form: <AddRoadTripForm />,
      submitButton: {
        text: "Plan Trip",
        type: "submit",
        form: "road-trip-form",
        onClick: (e: React.MouseEvent) => {
          const form = document.getElementById(
            "road-trip-form",
          ) as HTMLFormElement;
          if (!form.checkValidity()) {
            e.preventDefault();
            form.reportValidity();
          }
        },
      },
    },
    "My Cars": {
      title: "Your Garage",
      description: "List of your cars",
      form: <ViewCarsDisplay />,
      submitButton: {
        text: "Manage Cars",
        onClick: () => {
          router.push("/My-Cars");
        },
      },
    },
    Goals: {
      title: "Set New Goal",
      description:
        "Track your automotive goals and achievements. Set milestones for your car journey.",
      form: <AddGoalForm />,
      submitButton: {
        text: "Create Goal",
        type: "submit",
        form: "goal-form",
        onClick: (e: React.MouseEvent) => {
          const form = document.getElementById("goal-form") as HTMLFormElement;
          if (!form.checkValidity()) {
            e.preventDefault();
            form.reportValidity();
          }
        },
      },
    },
    "Service Log": {
      title: "Log Service",
      description:
        "Keep track of your vehicle maintenance. Log services, repairs, and scheduled maintenance.",
      form: <AddServiceLogForm />,
      submitButton: {
        text: "Add Service",
        type: "submit",
        form: "service-log-form",
        onClick: (e: React.MouseEvent) => {
          const form = document.getElementById(
            "service-log-form",
          ) as HTMLFormElement;
          if (!form.checkValidity()) {
            e.preventDefault();
            form.reportValidity();
          }
        },
      },
    },
  } as const;

  const renderDialogContent = (action: QuickAction) => {
    const config = dialogConfigs[action.title as keyof typeof dialogConfigs];
    if (!config) return null;

    return (
      <AlertDialogContent className="bg-bg2 max-h-[80vh] max-w-2xl overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>{config.title}</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div>
              {config.description && (
                <p className="text-muted-foreground mb-4">
                  {config.description}
                </p>
              )}
              {config.form}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{"Cancel"}</AlertDialogCancel>
          <AlertDialogAction {...config.submitButton}>
            {config.submitButton.text}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    );
  };

  return (
    <Card className="animate-fade-in bg-bg2 w-full xl:max-w-xs">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="text-primary h-5 w-5" />
          <h1 className="text-2xl text-white">Quick Actions</h1>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-3 md:grid-cols-6 xl:grid-cols-2">
        {quickActions.map((action, index) => (
          <AlertDialog key={index}>
            <AlertDialogTrigger asChild>
              <QuickActionButtons icon={action.icon} color={action.color} />
            </AlertDialogTrigger>
            {renderDialogContent(action)}
          </AlertDialog>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuickActions;
