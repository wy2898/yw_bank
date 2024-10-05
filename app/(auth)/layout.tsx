import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/homepage.png"
            alt="Auth image"
            width={800}
            height={1200}
            className="border-4 border-solid border-black-1 bg-black-1"
          />
        </div>
      </div>
    </main>
  );
}
