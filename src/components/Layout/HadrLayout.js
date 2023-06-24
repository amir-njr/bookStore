
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function HadrLayout({ children }) {


  return (
    <div>
      <div className="sticky top-0 z-30">

      <Header />
      </div>
  
      <div className="container mx-auto min-h-screen">
        {children}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
