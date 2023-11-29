import NavBar from "../components/Navbar/NavBar";
import Header from "../components/Header/Header";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="page-container">
      <NavBar />
      <section className="flex flex-1 flex-col">
        <Header />
        {children}
      </section>
    </section>
  );
}
