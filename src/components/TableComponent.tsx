import React from "react";

export default function UserTable({ data }) {
  return (
    <div className="mt-4 overflow-hidden shadow-2xl border border-gray-300 dark:border-gray-700/50">
      <table className="w-full table-auto border-collapse text-left text-sm">
        <thead>
          <tr className="bg-sky-100 dark:bg-sky-600 relative">
            <th className="px-4 py-2 font-bold text-sky-800 dark:text-white text-base tracking-wide border-r border-sky-200 dark:border-sky-700/50 relative">
              <div className="flex items-center">
                Name
              </div>
            </th>
            <th className="px-4 py-2 font-bold text-sky-800 dark:text-white text-base tracking-wide relative">
              <div className="flex items-center">
                Description
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700/30">
          {data.map(({ name, desc, href }, index) => (
            <tr
              key={name}
              className={`
                group transition-all duration-300 
                hover:bg-gradient-to-r 
                hover:from-sky-100 hover:to-blue-100 
                dark:hover:from-sky-900/20 dark:hover:to-blue-900/20
                ${index % 2 === 0 
                  ? 'bg-gray-50 dark:bg-gray-800/40' 
                  : 'bg-white dark:bg-gray-900/40'
                }
              `}
            >
              <td className="px-4 py-2 border-r border-gray-200 dark:border-gray-700/30 relative">
                <div className="flex items-center">
                  {href ? (
                    <a
                      href={`#${href}`}
                      className="font-mono font-semibold text-sky-700 dark:text-sky-300 hover:text-sky-600 dark:hover:text-sky-200 transition-colors duration-200 hover:underline decoration-sky-400 dark:decoration-sky-400 decoration-2 underline-offset-2"
                    >
                      {name}
                    </a>
                  ) : (
                    <span className="font-mono font-semibold text-sky-700 dark:text-sky-300">{name}</span>
                  )}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </td>
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-200">
                {desc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
