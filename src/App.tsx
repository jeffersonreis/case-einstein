import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import ActionData from './pages/ActionData';
import Footer from './pages/Footer';
import Feedback from './pages/Feedback';

const App: React.FC = () => {
  return (
    <main>
      <Home />
      <About />
      <ActionData />
      <Feedback />
      <Footer />
    </main>
  );
};

export default App;
