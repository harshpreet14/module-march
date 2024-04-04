import React from 'react'

function Filter({ genres, onGenreSelect }) {
  return (
      <div className="my-4 mt-6 p-4 bg-gray-100 rounded-lg shadow">
          <p className="text-4xl font-semibold mb-3 text-left">Filter by Genre</p>
          <div className="flex flex-wrap gap-2">
              {/* Adding a button to show all movies */}
              <button 
                  key="All" 
                  onClick={() => onGenreSelect('All')}
                  className="bg-gray-300 hover:bg-gray-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
              >
                  All
              </button>
              {genres.map(genre => (
                  <button 
                      key={genre} 
                      onClick={() => onGenreSelect(genre)}
                      className="bg-gray-300 hover:bg-gray-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                  >
                      {genre}
                  </button>
              ))}
          </div>
      </div>
  );
}


export default Filter
