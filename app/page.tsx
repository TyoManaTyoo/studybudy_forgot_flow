"use client";

import { useState } from "react";
import ForgotPassword from "@/components/ForgotPassword";
import OtpConfirm from "@/components/OtpConfirm";
import PrivacySettings from "@/components/PrivacySettings";

export default function Home() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");

  return (
    <main className="flex min-h-screen items-center justify-center sm:p-6">
      {/* Mobile: full layar. Desktop: kartu selebar ponsel di tengah */}
      <div className="relative flex min-h-screen w-full max-w-[390px] flex-col overflow-hidden bg-white sm:min-h-[800px] sm:rounded-[32px] sm:shadow-xl">
        {step === 0 && (
          <ForgotPassword email={email} setEmail={setEmail} onNext={() => setStep(1)} />
        )}
        {step === 1 && (
          <OtpConfirm email={email} onBack={() => setStep(0)} onNext={() => setStep(2)} />
        )}
        {step === 2 && (
          <PrivacySettings
            onBack={() => setStep(1)}
            onDone={() => { setEmail(""); setStep(0); }}
          />
        )}
      </div>
    </main>
  );
}
