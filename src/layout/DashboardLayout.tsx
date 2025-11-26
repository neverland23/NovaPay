import type { ReactNode } from "react";
import DashboardFooter from "../components/DashboardFooter";
import DashboardHeader from "../components/DashboardHeader";
import DashboardProfileSection from "../components/DashboardProfileSection";
import Preloader from "../helper/Preloader";

interface DashboardProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardProps> = ({ children }) => {
  return (
    <>
      {/* <Preloader /> */}
      <Preloader />

      {/* DashboardHeader */}
      <DashboardHeader />

      {/* DashboardProfileSection */}
      <DashboardProfileSection>{children}</DashboardProfileSection>

      {/* DashboardFooter */}
      <DashboardFooter />
    </>
  );
};

export default DashboardLayout;
