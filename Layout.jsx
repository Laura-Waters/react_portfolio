import Navigation from './src/components/Navigation';
import Header from './src/components/Header';
import Footer from './src/components/Footer'; 

const Layout = ({ children }) => {
    return (
        <div>
            <Header>
                <Navigation />
            </Header>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};


export default Layout;


