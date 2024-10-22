import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handlePreInterview = () => {
    navigate('/pre-interview');
  };

  const handleStartConversation = () => {
    navigate('/conversation');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const handleGiveAGift = () => {
    navigate('/give-a-gift');
  };

  const handleCreateMemoir = () => {
    navigate('/create-memoir');
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <div className="relative z-10 flex-grow">
        <div className="bg-[#3b2b29] bg-opacity-70 p-8 flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-3xl font-bold custom-font text-eggshell mb-8">Dashboard</h2>

          {/* Stack the buttons in a column */}
          <div className="flex flex-col space-y-6 text-center">
            <button
              onClick={handlePreInterview}
              className="text-lg md:text-xl custom-font text-eggshell border border-eggshell px-6 py-4 rounded-lg hover:bg-eggshell hover:text-black transition"
            >
              Start Pre-Interview
            </button>

            <button
              onClick={handleStartConversation}
              className="text-lg md:text-xl custom-font text-eggshell border border-eggshell px-6 py-4 rounded-lg hover:bg-eggshell hover:text-black transition"
            >
              Start Conversation
            </button>

            {/* Additional buttons */}
            <button
              onClick={handleProfile}
              className="text-lg md:text-xl custom-font text-eggshell border border-eggshell px-6 py-4 rounded-lg hover:bg-eggshell hover:text-black transition"
            >
              Profile
            </button>

            <button
              onClick={handleGiveAGift}
              className="text-lg md:text-xl custom-font text-eggshell border border-eggshell px-6 py-4 rounded-lg hover:bg-eggshell hover:text-black transition"
            >
              Give a Gift
            </button>

            <button
              onClick={handleCreateMemoir}
              className="text-lg md:text-xl custom-font text-eggshell border border-eggshell px-6 py-4 rounded-lg hover:bg-eggshell hover:text-black transition"
            >
              Create Memoir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

