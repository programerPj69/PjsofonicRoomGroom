import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StepIndicator } from './StepIndicator';
import { PersonalInfo } from './steps/PersonalInfo';
import { OTPRequest } from './steps/OTPRequest';
import { OTPVerification } from './steps/OTPVerification';
import { Success } from './steps/Success';

type Step = 'personal' | 'otp-request' | 'otp-verify' | 'success';

export function RegistrationForm() {
  const { userType } = useParams<{ userType: string }>();
  const [currentStep, setCurrentStep] = useState<Step>('personal');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    otp: ''
  });

  const steps = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'otp-request', label: 'Contact' },
    { id: 'otp-verify', label: 'Verify' },
    { id: 'success', label: 'Complete' }
  ];

  const handlePersonalInfoSubmit = (data: { fullName: string }) => {
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep('otp-request');
  };

  const handleOTPRequest = (data: { email: string; phone: string }) => {
    setFormData(prev => ({ ...prev, ...data }));
    // In a real app, this would trigger an API call to send OTP
    setCurrentStep('otp-verify');
  };

  const handleOTPVerify = (otp: string) => {
    setFormData(prev => ({ ...prev, otp }));
    // In a real app, this would verify the OTP with an API
    setCurrentStep('success');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Register as a {userType === 'landlord' ? 'Landlord' : 'Tenant'}
      </h1>

      <StepIndicator steps={steps} currentStep={currentStep} />

      <div className="mt-8">
        {currentStep === 'personal' && (
          <PersonalInfo onSubmit={handlePersonalInfoSubmit} />
        )}
        {currentStep === 'otp-request' && (
          <OTPRequest onSubmit={handleOTPRequest} />
        )}
        {currentStep === 'otp-verify' && (
          <OTPVerification 
            onSubmit={handleOTPVerify}
            onResend={() => console.log('Resend OTP')}
          />
        )}
        {currentStep === 'success' && (
          <Success userType={userType || ''} />
        )}
      </div>
    </div>
  );
}