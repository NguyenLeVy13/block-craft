import "@measured/puck/puck.css";
import "./styles.css";

// Radix UI
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme>{children}</Theme>
        <ToastContainer />
      </body>
    </html>
  );
}
