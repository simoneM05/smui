import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { StarsIcon } from "lucide-react";
import Link from "next/link";

const techs = [
  {
    name: "Tailwind 4",
    svg: (
      <svg
        viewBox="0 0 24 24"
        className="size-6 sm:size-8 md:size-9 lg:size-10 opacity-70"
      >
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
        className="size-6 sm:size-8 md:size-9 lg:size-10 opacity-70"
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
        className="size-6 sm:size-8 md:size-9 lg:size-10 opacity-70"
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
        className="size-6 sm:size-8 md:size-9 lg:size-10 opacity-70"
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
        className="size-6 sm:size-8 md:size-9 lg:size-10 opacity-70"
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
        className="size-6 sm:size-8 md:size-9 lg:size-10 opacity-70"
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
      <section className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 py-10 md:py-16 lg:py-20">
        <h1 className="px-3 py-2 border-2 rounded-full ">
          <Link href={"#"} className="flex items-center gap-2 cursor-pointer">
            <p className="text-sm font-semibold ">New feautre relase</p>
            <StarsIcon size={18} />
          </Link>
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          UI library for react
        </h1>
        <p className="max-w-md sm:max-w-xl md:max-w-2xl font-medium text-center text-sm sm:text-base md:text-lg ">
          Open-source collection of UI components and animated effects built
          with React, Typescript, Tailwind CSS, and Motion.
        </p>
        <Button className="flex space-x-1 text-sm md:text-base">
          <span>Get Started</span> <span>-</span>
          <span className="text-primary-foreground/70">It&apos;s free</span>
        </Button>

        <div className="flex flex-wrap items-center justify-center sm:gap-6 md:gap-8 lg:gap-10  mt-5 md:mt-8">
          {techs.map((tech, i) => (
            <TooltipProvider key={i}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant={"none"} className="h-12 w-12">
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
    </main>
  );
}
