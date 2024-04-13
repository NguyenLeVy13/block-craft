import { DefaultRootProps } from "@measured/puck";
import { ReactNode } from "react";
import { Header } from "../Header";
import Footer from "../Footer";

export type RootProps = {
  children: ReactNode;
  title: string;
} & DefaultRootProps;

function Template({ children, editMode }: RootProps) {
  return (
    <div>
      <Header editMode={editMode} />
      {children}
      <Footer/>
    </div>
  );
}

export default Template;
