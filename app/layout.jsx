import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <Nav></Nav>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;