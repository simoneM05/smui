"use client";
import { Separator } from "@/components/ui/separetor";
export function SeperatorDemo() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-md mx-auto">
      {/* Separator orizzontale */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center flex-col gap-4">
          <span>Components</span>
          <Separator orientation="horizontal" />
          <div className="flex gap-5">
            <div className="flex gap-5 items-stretch">
              <span className="self-center">Separator</span>
              <Separator orientation="vertical" />
              <span className="self-center">Card</span>
              <Separator orientation="vertical" />
              <span className="self-center"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
