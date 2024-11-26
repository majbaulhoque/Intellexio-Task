"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { useUserAgentContext } from "@/components/providers/userAgentProvider";
import { useEffect, useState } from "react";

export const UserAgent = () => {
  const { userAgent } = useUserAgentContext();
  const [isJSRunning, setIsJSRunning] = useState(false);

  useEffect(() => {
    setIsJSRunning(true);
  }, []);

  return (
    <div>
      <BackToHome />
      {isJSRunning ? (
        userAgent ? (
          <div className="flex font-mono font-semibold text-sm">
            <div className="border p-2">UserAgent</div>
            <div className="border p-2">{userAgent}</div>
          </div>
        ) : (
          <div>No user agent</div>
        )
      ) : (
      // Fixed user Agent issue
        <div className="flex font-mono font-semibold text-sm">
            <div className="border p-2">UserAgent</div>
            <div className="border p-2">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36</div>
          </div>
      )}
    </div>
  );
};
