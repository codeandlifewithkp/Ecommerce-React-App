import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../Styles/Home.css';

function Home () {
    return (
        <>
            <Header />
            <section className='hero'>
                <h1>UNLEASH THE <br /> <span class="glitch-text">BEAST</span></h1>
                <p>NEXT-GEN GAMING HARDWARE FOR THE ELITE.</p>
                <button class="cta-btn">ENTER STORE</button>
            </section>
            <h1>Home</h1>
            <Footer />
        </>
    );
}

export default Home;