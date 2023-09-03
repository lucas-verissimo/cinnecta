import "./globals.css";

import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Cinnecta",
  description: "Clone do site Cinnecta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-grey-246 bg-no-repeat">
        <PageHeader />
        {children}
      </body>
    </html>
  );
}
