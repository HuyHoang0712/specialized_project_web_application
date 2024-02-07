import NavBar from "../components/Navbar/NavBar";
import Header from "../components/Header/Header";
import { Providers } from "../providers";
export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <main className="page-container">
        <NavBar />
        <div className="flex flex-1 flex-col">
          <Header />
          {children}
        </div>
      </main>
    </Providers>
  );
}
