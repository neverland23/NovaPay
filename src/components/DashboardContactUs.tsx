import ContactInner from "@/components/ContactInner";

const DashboardContactUs: React.FC = () => {
  return (
    <div className='flex-grow-1 position-relative z-1'>
      <div className='dashboard-contact'>
        {/* ContactInner */}
        <ContactInner />
      </div>
    </div>
  );
};

export default DashboardContactUs;
