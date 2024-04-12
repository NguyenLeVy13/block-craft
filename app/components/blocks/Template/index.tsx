import { DefaultRootProps } from "@measured/puck";
import { ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export type RootProps = {
    children: ReactNode;
    title: string;
} & DefaultRootProps;

function Template({ children, editMode }: RootProps) {
    return (
        <>
            <Header editMode={editMode} />
            {children}
            <Footer>
                <Footer.List title="Section">
                    <Footer.Link href="">Label</Footer.Link>
                    <Footer.Link href="">Label</Footer.Link>
                    <Footer.Link href="">Label</Footer.Link>
                    <Footer.Link href="">Label</Footer.Link>
                </Footer.List>
                <Footer.List title="Section">
                    <Footer.Link href="">Label</Footer.Link>
                    <Footer.Link href="">Label</Footer.Link>
                    <Footer.Link href="">Label</Footer.Link>
                    <Footer.Link href="">Label</Footer.Link>
                </Footer.List>
                <Footer.List title="Section">
                    <Footer.Link href="">Label</Footer.Link>
                    <Footer.Link href="">Label</Footer.Link>
                    <Footer.Link href="">Label</Footer.Link>
                    <Footer.Link href="">Label</Footer.Link>
                </Footer.List>
                <Footer.List title="Section">
                    <Footer.Link href="">Label</Footer.Link>
                    <Footer.Link href="">Label</Footer.Link>
                    <Footer.Link href="">Label</Footer.Link>
                    <Footer.Link href="">Label</Footer.Link>
                </Footer.List>
            </Footer>
        </>
    );
}

export default Template;
