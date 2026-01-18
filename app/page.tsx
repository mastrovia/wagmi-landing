import Header from './components/ui/Header';
import Hero from './sections/Hero';
import OurSpaces from './sections/OurSpaces';

const Home = () => {
    return (
        <div className="bg-[#F3F4FB] min-h-screen">
            <Header />
            <main>
                <Hero />
                <OurSpaces />
            </main>
        </div>
    );
};

export default Home;
