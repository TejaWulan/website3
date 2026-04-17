import React, { useEffect, useState } from "react";
import logoLight from "../assets/img/logos/logo-wideedu-putih-header.png";
import logoDark from "../assets/img/logos/logo-wideedu-header.png";
import { Link, useLocation } from "react-router-dom";
import "boxicons";

function Navbar(props) {
	const { navShow, setNavShow } = props;

	const handleNav = () => {
		setNavShow(!navShow);
	};

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const navCheck = (pages) => {
		if (pathname.pathname == pages) {
			return "active";
		}
	};

	const [onScroll, setOnScroll] = useState(false);

	window.onscroll = () => {
		if (window.scrollY < 200) {
			setOnScroll(false);
		} else {
			setOnScroll(true);
		}
	};

	return (
		<>
			<div
				id="navbar"
				className={`flex px-5 lg:px-24 fixed top-0 left-0 w-full items-center z-50  ${
					onScroll
						? "bg-white text-[##2C77A3] transition-all"
						: "bg-gradient-to-r from-[#2D408F] to-[#45C4A8] transition-all"
				} `}
			>
				<div className="logo z-10">
					<Link to="/">
						<img
							src={onScroll ? logoDark : logoLight}
							className="h-[90px]"
							alt=""
						/>
					</Link>
				</div>

				<div className="nav-items ms-auto z-10">
					<ul className="items-stretch lg:flex hidden">
						<li
							className={`mr-5 mx-16 f-1 text-2xl font-bold nav flex justify-center items-center flex-col ${
								onScroll ? "scroll" : "noScroll"
							} ${navCheck("/")}`}
						>
							<Link to="/">Home</Link>
							<span className="absolute hidden bottom-0 rounded-full navHover"></span>
						</li>
						<li
							className={`mr-5 mx-16 f-1 text-2xl font-bold nav flex justify-center items-center flex-col ${
								onScroll ? "scroll" : "noScroll"
							} ${navCheck("/product")}`}
						>
							<Link to="/product">Products</Link>
							<span className="absolute hidden bottom-0 rounded-full navHover"></span>
						</li>
						<li
							className={`mr-5 mx-16 f-1 text-2xl font-bold nav flex justify-center items-center flex-col ${
								onScroll ? "scroll" : "noScroll"
							} ${navCheck("/about")}`}
						>
							<Link to="/about">About Us</Link>
							<span className="absolute hidden bottom-0 rounded-full navHover"></span>
						</li>
						{/* <li
							className={`mr-5 mx-16 f-1 text-2xl font-bold nav flex justify-center items-center flex-col ${
								onScroll ? "scroll" : "noScroll"
							} ${navCheck("/blog")}`}
						>
							<Link to="/blog">Blog</Link>
							<span className="absolute hidden bottom-0 rounded-full navHover"></span>
						</li> */}
					</ul>
					<ul className="items-center flex lg:hidden justify-center">
						<li className="font-1 text-2xl font-bold cursor-pointer transition-all">
							<div
								className={`menu-icons ${!navShow ? "rotate-0" : "rotate-90"}`}
								onClick={() => handleNav()}
							>
								{!navShow ? (
									<box-icon
										aria-label="button"
										name="menu"
										size="md"
										color={onScroll ? "black" : "white"}
									></box-icon>
								) : (
									<box-icon
										onClick={() => handleNav()}
										aria-label="button"
										name="x"
										size="md"
										color={onScroll ? "black" : "white"}
									></box-icon>
								)}
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="">
				<div
					className={`
          ${
						navShow
							? "translate-x-[100vw] z-10 transition-all duration-700 fixed top-22"
							: "translate-x-[200vw] transition-all z-10 duration-700 fixed top-22"
					}
        `}
				>
					<ul
						id="navMobile"
						className={`absolute py-3 pl-5 h-[100vh] items-center lg:hidden w-[80vw] right-0 bg-white`}
					>
						<li
							className={`mr-5 mx-5 my-10 text-right font-1 text-2xl font-bold nav flex items-center justify-end ${navCheck(
								"/"
							)}`}
						>
							<Link className="me-3" to="/" onClick={() => handleNav()}>
								Home
							</Link>
							<box-icon name="home" className="bxicon" type="solid"></box-icon>
						</li>
						<li
							className={`"mr-5 mx-5 my-10 text-right font-1 text-2xl font-bold nav flex items-center justify-end ${navCheck(
								"/product"
							)}`}
						>
							<Link className="me-3" to="/product" onClick={() => handleNav()}>
								Product
							</Link>
							<box-icon
								name="briefcase"
								className="bxicon"
								type="solid"
							></box-icon>
						</li>
						<li
							className={`"mr-5 mx-5 my-10 text-right font-1 text-2xl font-bold nav flex items-center justify-end ${navCheck(
								"/about"
							)}`}
						>
							<Link className="me-3" to="/about" onClick={() => handleNav()}>
								About
							</Link>
							<box-icon name="user" className="bxicon" type="solid"></box-icon>
						</li>
						{/* <li
							className={`"mr-5 mx-5 my-10 text-right font-1 text-2xl font-bold nav flex items-center justify-end ${navCheck(
								"/blog"
							)}`}
						>
							<Link className="me-3" to="/blog" onClick={() => handleNav()}>
								Blog
							</Link>
							<box-icon name="news" className="bxicon" type="solid"></box-icon>
						</li> */}
					</ul>
				</div>
			</div>
		</>
	);
}

export default Navbar;
