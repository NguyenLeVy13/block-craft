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
  // <header className={getClassName()}>
  //     <div className={getClassName("logo")}>LOGO</div>
  //     <nav className={getClassName("items")}>
  //         <NavItem label="Home" href={`${editMode ? "" : "/"}`} />
  //     </nav>
  // </header>
  <section className="bg-white">
    <nav className="flex justify-between p-6 px-4">
      <div className="flex justify-between items-center w-full">
        <div className="xl:w-1/3">
          <a className="block max-w-max" href="#">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="60" rx="10" fill="#E31C79" />
              <path d="M20 12H45V37H32.5V25H20V12Z" fill="white" />
              <path
                d="M13.3333 19.1667L20 12.5V25H7.5L13.3333 19.1667Z"
                fill="white"
                fillOpacity="0.4"
              />
              <path d="M20 25H32.5V37H20V25Z" fill="white" fillOpacity="0.4" />
              <path
                d="M32.5 37H45L38.75 43.25L32.5 49.5V37Z"
                fill="white"
                fillOpacity="0.4"
              />
            </svg>
          </a>
        </div>
        <div className="hidden xl:block xl:w-1/3">
          <ul className="flex justify-center">
            <li className="mr-12">
              <a
                className="text-coolGray-500 hover:text-coolGray-900 font-medium"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="mr-12">
              <a
                className="text-coolGray-500 hover:text-coolGray-900 font-medium"
                href="#"
              >
                about
              </a>
            </li>
            <li className="mr-12">
              <a
                className="text-coolGray-500 hover:text-coolGray-900 font-medium"
                href="#"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                className="text-coolGray-500 hover:text-coolGray-900 font-medium"
                href="#"
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden xl:block xl:w-1/3">
          <div className="flex items-center justify-end">
            <a
              className="inline-block py-2 px-4 mr-2 leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium rounded-md"
              href="#"
            >
              Log In
            </a>
            <a
              className="inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
              href="#"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  </section>
);

export { Header };
