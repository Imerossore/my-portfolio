import Footer from "@/components/footer";
import Header from "@/components/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className="min-h-screen flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
