"use client";

import { Progress } from "@/components/ui/progress";
import React from "react";

export function StatusBarDemo() {
  const [downloadProgress, setDownloadProgress] = React.useState(0);
  // Get status message based on progress
  const getStatusMessage = (progress: number) => {
    if (progress < 5) return "Initializing download...";
    if (progress < 15) return "Setting up environment...";
    if (progress < 25) return "Connecting to server...";
    if (progress < 35) return "Verifying permissions...";
    if (progress < 50) return "Downloading core files...";
    if (progress < 65) return "Downloading assets...";
    if (progress < 80) return "Downloading dependencies...";
    if (progress < 90) return "Extracting files...";
    if (progress < 95) return "Validating integrity...";
    if (progress < 100) return "Finalizing installation...";
    return "Download complete!";
  };
  React.useEffect(() => {
    // Download simulation
    const downloadTimer = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          return 0; // Reset for continuous loop
        }
        return prev + Math.random() * 3 + 1; // Random increment 1-4
      });
    }, 150);
    return () => {
      clearInterval(downloadTimer);
    };
  }, []);
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Workspace Setup</span>
          <span className="text-muted-foreground">
            {Math.round(downloadProgress)}%
          </span>
        </div>
        <Progress value={downloadProgress} className="w-full" />
        <div className="text-xs text-muted-foreground">
          {getStatusMessage(downloadProgress)}
        </div>
      </div>
    </div>
  );
}
