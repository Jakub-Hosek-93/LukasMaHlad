'use client';

const ProgressBar = () => {
  return (
      <progress
          value={20}
          max={89}
          className={"w-9/12 h-4 rounded-2xl overflow-hidden"}
      ></progress>
    );
};

export default ProgressBar;