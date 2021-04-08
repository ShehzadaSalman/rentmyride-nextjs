import Link from "next/link";
import { useRouter } from "next/router";
const SideNav = () => {
  const route = useRouter();
  const { pathname } = route;
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <>
      <div id="mySidenav" className="sidenav">
        <a className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <Link href="/">
          <a onClick={closeNav} className={pathname === "/" ? "active" : ""}>
            Home
          </a>
        </Link>
        <Link href="/Cars">
          <a
            onClick={closeNav}
            className={pathname === "/Cars" ? "active" : ""}
          >
            Car Rental
          </a>
        </Link>

        <a href="#">Car With Driver</a>
        <a href="#">Stretch Limo</a>
        <a href="#">Packages</a>
        <Link href="Blogs">
          <a
            onClick={closeNav}
            className={pathname === "/Blogs" ? "active" : ""}
          >
            Blogs
          </a>
        </Link>
        <Link href="/contactus">
          <a
            onClick={closeNav}
            className={pathname === "/contactus" ? "active" : ""}
            href="#"
          >
            Contact
          </a>
        </Link>
      </div>

      <style global jsx>
        {`
          .sidenav {
            height: 100%;
            width: 0;
            position: fixed;
            z-index: 2;
            top: 0;
            left: 0;
            background-color: #fff;
            overflow-x: hidden;
            transition: 0.5s;
            padding-top: 90px;
            box-shadow: 7px 2px 31px 16px rgb(0 0 0 / 50%);
            -webkit-box-shadow: 7px 2px 11px -4px rgb(0 0 0 / 75%);
            -moz-box-shadow: 7px 2px 11px -4px rgba(0, 0, 0, 0.75);
          }

          .sidenav a {
            margin: 8px 37px 23px 32px;
            text-decoration: none;
            font-size: 17px;
            color: #000;
            font-weight: 500;
            display: block;
            transition: 0.3s;
          }

          .sidenav a.active {
            color: #f00;
            border-bottom: solid 2px;
          }

          .sidenav a:hover {
            color: red;
          }

          .sidenav .closebtn {
            position: absolute;
            top: -3px;
            right: -17px;
            font-size: 36px;
            margin-left: 50px;
          }

          #main {
            transition: margin-left 0.5s;
            padding: 16px;
          }

          @media screen and (max-height: 450px) {
            .sidenav {
              padding-top: 15px;
            }
            .sidenav a {
              font-size: 18px;
            }
          }
        `}
      </style>
    </>
  );
};

export default SideNav;
