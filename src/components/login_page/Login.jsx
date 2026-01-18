import { useState } from 'react';

const Login = () => {
    const [step, setStep] = useState(1); // 1 = phone input, 2 = OTP input
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Validate phone number (10 digits)
        if (!phoneNumber || phoneNumber.length < 10) {
            setError('Please enter a valid phone number');
            return;
        }

        // Move to OTP step
        setStep(2);
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Validate OTP (6 digits)
        if (!otp || otp.length !== 6) {
            setError('Please enter a valid 6-digit OTP');
            return;
        }

        // Handle OTP verification logic here
        console.log('Verifying OTP:', otp);
    };

    const handleResendOtp = () => {
        // Handle resend OTP logic here
        console.log('Resending OTP to:', phoneNumber);
        alert('OTP has been resent to your phone number');
    };

    const handleChangeNumber = () => {
        setStep(1);
        setOtp('');
        setError('');
    };

    return (
        <section className="w-full min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-12 bg-white">
            <div className="w-full max-w-md px-6">
                {/* Brand/Logo */}
                <div className="text-center mb-10">
                    <h1 className="text-[24px] md:text-[28px] font-light text-[#1a1a1a] tracking-[2px]">
                        Abhaya
                    </h1>
                </div>

                {/* Step 1: Phone Number Input */}
                {step === 1 && (
                    <div>
                        <form onSubmit={handlePhoneSubmit}>
                            {/* Phone Input */}
                            <div className="mb-4">
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => {
                                        // Only allow numbers
                                        const value = e.target.value.replace(/\D/g, '');
                                        if (value.length <= 10) {
                                            setPhoneNumber(value);
                                        }
                                    }}
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-4 border border-[#e0e0e0] rounded-lg text-[15px] text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                                />
                            </div>

                            {/* Error Message */}
                            {error && (
                                <p className="text-red-500 text-[13px] mb-4">{error}</p>
                            )}

                            {/* Continue Button */}
                            <button
                                type="submit"
                                className="w-full py-4 bg-[#1a1a1a] text-white text-[14px] font-medium rounded-lg hover:bg-[#333] transition-colors"
                            >
                                Continue
                            </button>
                        </form>
                    </div>
                )}

                {/* Step 2: OTP Input */}
                {step === 2 && (
                    <div>
                        <div className="mb-6">
                            <h2 className="text-[18px] md:text-[20px] font-semibold text-[#1a1a1a] mb-2">
                                Enter code
                            </h2>
                            <p className="text-[14px] text-[#666]">
                                Sent to +91 {phoneNumber}
                            </p>
                        </div>

                        <form onSubmit={handleOtpSubmit}>
                            {/* OTP Input */}
                            <div className="mb-4">
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) => {
                                        // Only allow numbers
                                        const value = e.target.value.replace(/\D/g, '');
                                        if (value.length <= 6) {
                                            setOtp(value);
                                        }
                                    }}
                                    placeholder="6-digit code"
                                    className="w-full px-4 py-4 border border-[#e0e0e0] rounded-lg text-[15px] text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                                />
                            </div>

                            {/* Error Message */}
                            {error && (
                                <p className="text-red-500 text-[13px] mb-4">{error}</p>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-4 bg-[#1a1a1a] text-white text-[14px] font-medium rounded-lg hover:bg-[#333] transition-colors"
                            >
                                Submit
                            </button>
                        </form>

                        {/* Resend OTP Link */}
                        <div className="mt-6 text-center">
                            <button
                                type="button"
                                onClick={handleResendOtp}
                                className="text-[14px] text-[#1a1a1a] underline hover:opacity-70 transition-opacity"
                            >
                                Resend OTP
                            </button>
                        </div>

                        {/* Change Number Link */}
                        <div className="mt-4 text-center">
                            <button
                                type="button"
                                onClick={handleChangeNumber}
                                className="text-[14px] text-[#666] hover:text-[#1a1a1a] transition-colors"
                            >
                                Sign in with a different number
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Login;
