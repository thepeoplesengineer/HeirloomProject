import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import backgroundImage from '../assets/InternalLandingBG.svg'; 

const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Always render Header */}
      <Header />

      {/* Main content */}
      <div
        className="relative flex-grow bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          paddingTop: '75px', // Adjust based on the height of your header
        }}
      >
        <main className="flex-grow container mx-auto p-0 min-h-screen">
          <Outlet /> {/* This is where the child routes will render */}
        </main>
      </div>

      {/* Always render Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
