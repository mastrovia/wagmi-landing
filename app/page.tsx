import Header from './components/ui/Header';
import Hero from './sections/Hero';
import OurSpaces from './sections/OurSpaces';
import Amenities from './sections/Amentities';
import PrefferedFor from './sections/PrefferedFor';

const Home = () => {
    return (
        <div className="bg-[#F3F4FB] min-h-screen">
            <Header />
            <main>
                <Hero />
                <OurSpaces />
                <Amenities />
                <PrefferedFor />
            </main>
        </div>
    );
};

export default Home;
