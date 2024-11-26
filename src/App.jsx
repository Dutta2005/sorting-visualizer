import React from 'react';
import SortingVisualizer from './components/SortingVisualizer';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app bg-gray-900 min-h-screen flex flex-col justify-between">
      <header className="flex flex-col items-center">
        <h1 className="text-3xl text-white font-bold mt-5">Sorting Visualizer</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center mb-5">
        <SortingVisualizer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
