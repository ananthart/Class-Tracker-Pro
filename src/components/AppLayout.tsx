import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

interface AppLayoutProps {
  onLogout: () => void;
}

const AppLayout = ({ onLogout }: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500">
        <AppSidebar onLogout={onLogout} />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center border-b border-blue-400 bg-blue-50/95 backdrop-blur-md px-4 sticky top-0 z-50 shadow-lg">
            <SidebarTrigger className="mr-3 text-blue-800 hover:bg-blue-100" />
            <span className="text-sm text-blue-900 font-semibold">AttendTrack</span>
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
