import '@/app/ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body><div>
          what
        </div>
        {children}
        </body>
    </html>
  );
}
