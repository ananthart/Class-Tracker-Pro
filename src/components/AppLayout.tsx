import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

interface AppLayoutProps {
  onLogout: () => void;
}

const AppLayout = ({ onLogout }: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-white">
        <AppSidebar onLogout={onLogout} />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center border-b border-gray-200 bg-white px-4 sticky top-0 z-50 shadow-sm">
            <SidebarTrigger className="mr-3 text-gray-600 hover:bg-gray-50" />
            <span className="text-sm text-gray-700 font-semibold">AttendTrack</span>
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
