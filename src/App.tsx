import { useState } from "react";
import { ViewTypes } from "./types/viewTypes";
import Auth from "./pages/Auth";
import Tasks from "./pages/Tasks";
import Footer from "./components/Footer";

const App = () => {
  const [currentView, setCurrentView] = useState<ViewTypes>(ViewTypes.auth);

  const handleViewChange = (view: ViewTypes) => {
    setCurrentView(view);
  };

  return (
    <>
      {currentView === ViewTypes.auth && (
        <Auth onSwitchToTasks={() => handleViewChange(ViewTypes.tasks)} />
      )}
      {currentView === ViewTypes.tasks && (
        <Tasks onSwitchToAuth={() => handleViewChange(ViewTypes.auth)} />
      )}
      <Footer />
    </>
  );
};

export default App;
