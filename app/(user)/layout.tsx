import "../../styles/globals.css";
import Sidebar from "../../components/SideBar";
import Navbar from "../../components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <main>
                    <Sidebar />
                    <div className="main-content">
                        <Navbar />
                        {children}
                    </div>
                </main>
                <script src="./assets/js/script.js"></script>
                <script src="./assets/js/script2.js"></script>
            </body>
        </html>
    );
}
