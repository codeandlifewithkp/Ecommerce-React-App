import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../Styles/Home.css';

function Home () {
    return (
        <>
            <Header />
            <section className='hero'>
                <h1>Unleash The<br /> <span class="glitch-text">Beast</span></h1>
                <p>Next-Gen Gaming Hardware for the elite</p>
                <button class="cta-btn">ENTER STORE</button>
            </section>
            <h1>Home</h1>
            <Footer />
        </>
    );
}

export default Home;