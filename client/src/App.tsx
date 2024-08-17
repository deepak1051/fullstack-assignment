import { useState } from 'react';

import useCards from './hooks/useCards';
import Card from './components/Card';
import Search from './components/Seach';

function App() {
  const { cards, loading, error } = useCards();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/path-to-logo" alt="Logo" className="h-8" />
          <span className="text-lg font-semibold">Help Center</span>
        </div>
        <button className="bg-gray-800 py-2 px-4 rounded hover:bg-gray-700 transition">
          Submit a request
        </button>
      </header>

      <main className="bg-purple-100 flex-grow flex flex-col items-center p-6">
        <h1 className="text-4xl font-semibold mt-12">How can we help?</h1>
        <div className="mt-8 w-full max-w-lg">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {filteredCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </main>

      <footer className="bg-black text-white p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Abstract</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Branches
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Release Notes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Community</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Dribbble
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Podcast
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-sm mt-8">
          &copy; Copyright 2022 Abstract Studio Design, Inc. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
