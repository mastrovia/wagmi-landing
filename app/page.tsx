import Header from './components/ui/Header';
import Hero from './sections/Hero';

const Home = () => {
    return (
        <div className="bg-[#F3F4FB] min-h-screen font-sans">
            <Header />
            <main>
                <Hero />
            </main>
        </div>
    );
};

export default Home;
