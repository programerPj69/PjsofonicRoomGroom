import React, { useState, useEffect } from 'react';

interface OTPVerificationProps {
  onSubmit: (otp: string) => void;
  onResend: () => void;
}

export function OTPVerification({ onSubmit, onResend }: OTPVerificationProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.value && element.nextSibling) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length === 6) {
      onSubmit(otpString);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Enter the 6-digit code sent to your phone and email
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center gap-2">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              className="w-12 h-12 text-center text-xl border-2 rounded-lg focus:border-indigo-500 focus:ring-indigo-500"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Verify OTP
        </button>
      </form>

      <div className="text-center">
        {timer > 0 ? (
          <p className="text-sm text-gray-600">
            Resend code in {timer} seconds
          </p>
        ) : (
          <button
            onClick={onResend}
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            Resend OTP
          </button>
        )}
      </div>
    </div>
  );
}