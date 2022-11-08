import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <h1> I am from Layout</h1>
        {children}
      </body>
    </html>
  );
}
