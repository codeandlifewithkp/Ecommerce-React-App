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

            <marquee class="brands-strip">
                <span className='pro'> NVIDIA </span>
                <span className='pro'> ROG </span> 
                <span className='pro'> CORSAIR </span> 
                <span className='pro'> RAZER </span> 
                <span className='pro'> MSI </span>
            </marquee>
            <h1>Home</h1>
            <Footer />
        </>
    );
}

export default Home;