'use client';

const ProgressBar = () => {
  return (
      <div className="w-full h-2 bg-gray-200/50 rounded-full overflow-hidden shadow-inner">
          <div
              className="h-full rounded-full shadow-md border bg-black"
              style={{ width: '25%' }}
          ></div>
      </div>
    );
};

export default ProgressBar;