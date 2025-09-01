import NavPage from "./components/NavPage";
import SideNavbar from "./components/SideNavbar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[20%_60%_20%] min-h-screen">
      <section className="hidden md:block">
        <SideNavbar />
      </section>
      <section>{children}</section>
      <section className="hidden md:block">
        <NavPage />
      </section>
    </main>
  );
}
