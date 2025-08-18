import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ZapIcon } from "lucide-react";

const techs = [
  {
    name: "Tailwind 4",
    svg: (
      <svg viewBox="0 0 24 24" className="opacity-70 w-full h-full">
        <path
          d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "React 19",
    svg: (
      <svg
        viewBox="-10.5 -9.45 21 18.9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-70 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx="0" cy="0" r="2" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="10" ry="4.5"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(60)" />
          <ellipse rx="10" ry="4.5" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js 15.3",
    svg: (
      <svg
        viewBox="0 0 15 15"
        className="opacity-70 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 10.087 13.6902 12.3681 11.6975 13.7163L4.90687 4.20942C4.78053 4.03255 4.5544 3.95756 4.34741 4.02389C4.14042 4.09022 4 4.28268 4 4.50004V12H5V6.06027L10.8299 14.2221C9.82661 14.7201 8.696 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM10 10V4H11V10H10Z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Radix UI",
    svg: (
      <svg
        viewBox="4 0 17 25"
        className="opacity-70 w-full h-full"
        fill="currentColor"
        preserveAspectRatio="xMidYMid meet"
      >
        <path d="M12 25a8 8 0 1 1 0-16v16zM12 0H4v8h8V0zM17 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
      </svg>
    ),
  },
  {
    name: "shadcn/ui",
    svg: (
      <svg
        viewBox="0 0 256 256"
        className="opacity-70 w-full h-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="208"
          y1="128"
          x2="128"
          y2="208"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <line
          x1="192"
          y1="40"
          x2="40"
          y2="192"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    ),
  },
  {
    name: "Motion",
    svg: (
      <svg
        viewBox="0 0 1260 454"
        fill="currentColor"
        className="opacity-70 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <path d="M475.753 0 226.8 453.6H0L194.392 99.412C224.526 44.508 299.724 0 362.353 0zM1031.93 113.4c0-62.63 50.77-113.4 113.4-113.4s113.4 50.77 113.4 113.4c0 62.629-50.77 113.4-113.4 113.4s-113.4-50.771-113.4-113.4M518.278 0h226.8L496.125 453.6h-226.8zM786.147 0h226.803L818.555 354.188C788.422 409.092 713.223 453.6 650.594 453.6h-113.4z"></path>
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <main>
      <section className="flex flex-col gap-10 items-center justify-center py-10">
        <h1 className="border rounded-full flex gap-3 items-center p-3">
          qui ci andra un banner <ZapIcon />
        </h1>
        <h1 className="text-3xl font-semibold">qui ci andra il title</h1>
        <p className="max-w-xl text-center">
          qui ci sara una desrizione detagliata del mio progetto
        </p>
        <Button className="flex space-x-1">
          <span>Get Started</span> <span>-</span>
          <span className="text-primary-foreground/70">It&apos;s free</span>
        </Button>

        <div className="flex flex-wrap items-center gap-8 justify-center">
          {techs.map((tech, i) => (
            <TooltipProvider key={i}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="icon">
                    {tech.svg}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </section>
      <section></section>
    </main>
  );
}
