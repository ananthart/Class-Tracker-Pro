import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

interface AppLayoutProps {
  onLogout: () => void;
}

const AppLayout = ({ onLogout }: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
        <AppSidebar onLogout={onLogout} />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center border-b border-blue-300 bg-white/80 backdrop-blur-md px-4 sticky top-0 z-50 shadow-sm">
            <SidebarTrigger className="mr-3 text-blue-700 hover:bg-blue-50" />
            <span className="text-sm text-blue-800 font-semibold">AttendTrack</span>
          </header>
          <main className="flex-1 p-4 sm:p-6 max-w-5xl w-full mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
