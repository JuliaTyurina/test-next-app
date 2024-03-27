import "./globals.css";

export const metadata = {
  title: "Тест",
  description: "Тестовый проект",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
