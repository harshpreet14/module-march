import React from 'react'

function List({ movies }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Title
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Genre
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Year
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie.title} className="hover:bg-gray-200 transition duration-150 ease-in-out">
                <td className="px-5 py-2 border-b text-left border-gray-200 bg-white text-sm">
                  {movie.title}
                </td>
                <td className="px-5 py-2 border-b text-left border-gray-200 bg-white text-sm">
                  {movie.genre}
                </td>
                <td className="px-5 py-2 border-b text-left border-gray-200 bg-white text-sm">
                  {movie.year}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default List
