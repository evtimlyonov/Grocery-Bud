import { useEffect } from 'react';

export const Alert = ({ type, msg, removeAlert, list }: any) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <p
      className={`rounded mb-4 h-5 w-[90%] text-xs capitalize flex justify-center items-center ${
        type === 'success'
          ? 'bg-[#d4edda] text-[#155724]'
          : 'bg-[#f8d7da] text-[#721c]'
      }`}>
      {msg}
    </p>
  );
};
