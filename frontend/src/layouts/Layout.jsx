import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Layout() {
    return (
        <>
		<div className="wrapper">
			<Sidebar/>

			<div className="main">
				<Header/>
				<main className="content">
					<Outlet/>
				</main>
				<Footer/>
			</div>
		</div>
        </>
    );
}

export default Layout;