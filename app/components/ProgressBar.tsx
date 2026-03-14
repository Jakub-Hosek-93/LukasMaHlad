'use client';

const ProgressBar = () => {
  return (
      <div className="w-9/12 h-4 bg-gray-800/50 rounded-full overflow-hidden shadow-inner">
          <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 shadow-md"
              style={{ width: '25%' }}
          ></div>
      </div>
    );
};

export default ProgressBar;