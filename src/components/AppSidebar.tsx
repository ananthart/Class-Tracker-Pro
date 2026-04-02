import { GraduationCap, LayoutDashboard, BookOpen, BarChart3, User, LogOut } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUser, logoutUser } from "@/lib/attendance";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Subjects", url: "/subjects", icon: BookOpen },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Profile", url: "/profile", icon: User },
];

interface AppSidebarProps {
  onLogout: () => void;
}

export function AppSidebar({ onLogout }: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const user = getUser();

  const initials = user?.name
    ?.split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2) || "U";

  const handleLogout = () => {
    logoutUser();
    onLogout();
  };

  return (
    <Sidebar collapsible="icon" className="bg-blue-600 text-white border-r-0">
      <SidebarContent>
        {/* Brand */}
        <SidebarGroup>
          <div className="flex items-center gap-3 px-3 py-4">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/20 shrink-0">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            {!collapsed && <span className="font-heading font-bold text-lg text-white">AttendTrack</span>}
          </div>
        </SidebarGroup>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-blue-100">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className="hover:bg-white/10 hover:text-white transition-colors text-white"
                      activeClassName="bg-white/20 text-white font-medium border-r-2 border-white"
                    >
                      <item.icon className="mr-2 h-4 w-4 text-white" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-3 px-3 py-3">
          <Avatar className="w-8 h-8 shrink-0">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback className="bg-white/20 text-white text-xs font-bold">{initials}</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{user?.name}</p>
              <p className="text-xs text-blue-100 truncate">{user?.email}</p>
            </div>
          )}
          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 text-white hover:bg-white/10" onClick={handleLogout}>
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
