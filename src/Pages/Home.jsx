import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home () {
    return (
        <>
            <Header />
            <h1>Home</h1>
            <section>
                <b>Description</b>
                <p>This is the Home Page.</p>
            </section>
            <Footer />
        </>
    );
}

export default Home;