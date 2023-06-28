"use client";
export const Error = ({ error }) => {
  return (
    <div>
      <p>{error.toString()}</p>
    </div>
  );
};

export default Error;
