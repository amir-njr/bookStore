
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function HadrLayout({ children }) {


  return (
    <div>
      <Header />
  
      <div className="container mx-auto min-h-screen">
        {children}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
