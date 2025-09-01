"use client";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrub";
import { useComponent } from "@/context/ComponentContext";
import { Skeleton } from "@/components/ui/skeleton";

export const Header = () => {
  const { comp } = useComponent();

  // Skeleton mentre il componente non è ancora disponibile
  if (!comp) {
    return (
      <div className="space-y-2 animate-pulse">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Skeleton className="h-4 w-20 rounded-md" />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Skeleton className="h-4 w-16 rounded-md" />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Skeleton className="h-4 w-24 rounded-md" />
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Skeleton className="h-8 w-64 rounded-md" />
        <Skeleton className="h-4 w-96 rounded-md" />
      </div>
    );
  }

  const name = comp.name.charAt(0).toUpperCase() + comp.name.slice(1);

  return (
    <div className="space-y-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/Docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-semibold">{name}</h1>
      <p className="text-sm text-foreground/40">{comp.description}</p>
    </div>
  );
};
