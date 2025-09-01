"use client";
import React from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

interface DeviceContextValue {
  deviceType: DeviceType;
}

const DeviceContext = React.createContext<DeviceContextValue | undefined>(
  undefined
);

export const DeviceProvider = ({ children }: { children: React.ReactNode }) => {
  const [deviceType, setDeviceType] = React.useState<DeviceType>("desktop");

  React.useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      if (width < 768) setDeviceType("mobile");
      else if (width < 1024) setDeviceType("tablet");
      else setDeviceType("desktop");
    };

    updateDevice(); // controllo iniziale
    window.addEventListener("resize", updateDevice);

    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  return (
    <DeviceContext.Provider value={{ deviceType }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => {
  const ctx = React.useContext(DeviceContext);
  if (!ctx) throw new Error("useDevice deve stare dentro DeviceProvider");
  return ctx;
};
