import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps & { attribute?: string }) {
  return (
    <NextThemesProvider attribute="class" {...props}>
      {children}
    </NextThemesProvider>
  );
}
