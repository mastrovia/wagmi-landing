import Header from './components/ui/Header';
import Hero from './sections/Hero';
import OurSpaces from './sections/OurSpaces';
import Amenities from './sections/Amentities';
import PrefferedFor from './sections/PrefferedFor';
import KnowMore from './sections/KnowMore';
import Testimonials from './sections/Testimonials';
import Locations from './sections/Locations';

const Home = () => {
    return (
        <div className="bg-[#F3F4FB] min-h-screen">
            <Header />
            <main>
                <Hero />
                <OurSpaces />
                <Amenities />
                <PrefferedFor />
                <KnowMore />
                <Testimonials />
                <Locations />
            </main>
        </div>
    );
};

export default Home;
