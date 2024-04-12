import getClassNameFactory from "../../../../lib/get-class-name-factory";
import styles from "./styles.module.css";

const getClassName = getClassNameFactory("Header", styles);

const NavItem = ({ label, href }: { label: string; href: string }) => {
    const navPath = window.location.pathname.replace("/admin/builder", "") || "/";

    const isActive = navPath === (href.replace("/admin/builder", "") || "/");

    const El = href ? "a" : "span";

    return (
        <El
            href={href || "/"}
            style={{
                textDecoration: "none",
                color: isActive
                    ? "var(--puck-color-grey-02)"
                    : "var(--puck-color-grey-06)",
                fontWeight: isActive ? "600" : "400",
            }}
        >
            {label}
        </El>
    );
};

const Header = ({ editMode }) => (
    <header className={getClassName()}>
        <div className={getClassName("logo")}>LOGO</div>
        <nav className={getClassName("items")}>
            <NavItem label="Home" href={`${editMode ? "" : "/"}`} />
        </nav>
    </header>
);

export { Header };
