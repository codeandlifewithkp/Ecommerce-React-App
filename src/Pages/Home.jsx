import { SiNvidia, SiRepublicofgamers, SiCorsair, SiRazer, SiMsi } from "react-icons/si";
import { Link } from 'react-router-dom';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import './Styles/Home.css';

function Home() {
    return (
        <>
            <Header />
            <section className='hero'>
                <h1>Gaming<br /> <span class="glitch-text">Accessories</span></h1>
                <p>Next-Gen Gaming Hardware for the elite</p>
                <Link to={'/store/'} class="cta-page">Enter Store</Link>
            </section>

            <div className="marquee-container">
                <div className="marquee-content">
                    <span className='pro'> <SiNvidia /> NVIDIA </span>
                    <span className='pro'> <SiRepublicofgamers /> ROG </span>
                    <span className='pro'> <SiCorsair /> CORSAIR </span>
                    <span className='pro'> <SiRazer /> RAZER </span>
                    <span className='pro'> <SiMsi /> MSI </span>
                    {/* Duplicate content for seamless loop */}
                    <span className='pro'> <SiNvidia /> NVIDIA </span>
                    <span className='pro'> <SiRepublicofgamers /> ROG </span>
                    <span className='pro'> <SiCorsair /> CORSAIR </span>
                    <span className='pro'> <SiRazer /> RAZER </span>
                    <span className='pro'> <SiMsi /> MSI </span>
                    <span className='pro'> <SiNvidia /> NVIDIA </span>
                    <span className='pro'> <SiRepublicofgamers /> ROG </span>
                    <span className='pro'> <SiCorsair /> CORSAIR </span>
                    <span className='pro'> <SiRazer /> RAZER </span>
                    <span className='pro'> <SiMsi /> MSI </span>
                    <span className='pro'> <SiNvidia /> NVIDIA </span>
                    <span className='pro'> <SiRepublicofgamers /> ROG </span>
                    <span className='pro'> <SiCorsair /> CORSAIR </span>
                    <span className='pro'> <SiRazer /> RAZER </span>
                    <span className='pro'> <SiMsi /> MSI </span>
                </div>
            </div>
            <section className='popular-products'>
                <h1>Popular Products</h1>
                <button className='ctabtn'>View All</button>
                <div className='products'>
                    <div className='cards'>
                        <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQUwPLx60itZkOlRzvIEUmQcJiuBxGBpDY5tfZUX_uzl7MgHYQsNXm3EUsmO2QuJkzZL_g66UKlk39q1gdMv9rU8o2z4BkLiuoQGQcmoPrKmvNwHK96ibHkdQ" alt="" />
                        <div>
                            <h3>Zebronics Transformer Gaming Keyboard and Mouse Combo</h3>
                        </div>
                        <div className='buttons'>
                            <button>Buy Now</button>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                    <div className='cards'>
                        <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQrzPD2ZViwY1Nu4cv9Db6ZuQnyGS8xT6a2E6sS1zISD04QwiAEA5DixWo7JAsN1SXn0xowAdQEWcs7uso2dDLQd0ao96N_YuwAbT9UlJrlfFQxr1KZ4naoCA" alt="" />
                        <div>
                            <h3>Zebronics Transformer M Plus Wired Gaming Mouse</h3>
                        </div>
                        <div className='buttons'>
                            <button>Buy Now</button>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                    <div className='cards'>
                        <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT0oqIaWoLR75nFyB0-DvnOZD3m9WScqfousQdJumOu3xKa7z1_fkGnL4RKuTyCGtmLcK5GdfFSHBZMJJQdw8AipfySIk4_K_72OAsI2XGIC7s89BokaXIY" alt="" />
                        <div>
                            <h3>SpinBot BattleMods NinjaX Clip Design Gaming Triggers</h3>
                        </div>
                        <div className='buttons'>
                            <button>Buy Now</button>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home;