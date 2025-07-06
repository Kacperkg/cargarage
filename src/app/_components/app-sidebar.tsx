"use client";

import { Calendar, Home, Inbox, Settings, Info } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "~/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import { User, LogOut } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/Dashboard",
    icon: Home,
  },
  {
    title: "My Cars",
    url: "/My-Cars",
    icon: Inbox,
  },
  {
    title: "Dream Cars",
    url: "/Dream-Cars",
    icon: Calendar,
  },
  {
    title: "About",
    url: "/Info",
    icon: Info,
  },
  // {
  //   title: "Projects",
  //   url: "/Projects",
  //   icon: Search,
  // },
  // {
  //   title: "Goals",
  //   url: "/Goals",
  //   icon: Target,
  // },
  // {
  //   title: "Road Trip",
  //   url: "/Road-Trip",
  //   icon: Map,
  // },
];

export function AppSidebar() {
  const { user } = useUser();

  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const depth = pathSegments.length;

  if (pathname === "/" || depth > 1) {
    return null;
  }

  return (
    <Sidebar>
      <SidebarContent className="bg-bg2">
        <SidebarGroup>
          <SidebarGroupLabel className="flex flex-row justify-between">
            <h1 className="text-2xl font-bold">CarVault</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.imageUrl} alt="Profile" />
                    <AvatarFallback>{user?.fullName?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="bg-popover border-border w-56"
                align="end"
                forceMount
              >
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm leading-none font-medium">
                      {user?.fullName}
                    </p>
                    <p className="text-muted-foreground text-xs leading-none">
                      {user?.emailAddresses[0]?.emailAddress}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <SignOutButton>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </SignOutButton>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarGroupLabel>

          <SidebarGroupContent className="my-4">
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarMenu>
              {items.map((item, index) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-bg2">
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-muted-foreground text-xs">Version 0.1.0</p>
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} Kacper Gajdarski. All rights
            reserved.
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
