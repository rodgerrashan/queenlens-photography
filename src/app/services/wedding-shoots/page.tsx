
import Intro from "@/components/ServicesCat/intro";
import Reachout from "@/components/ServicesCat/Reachout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Packages from "@/components/ServicesCat/Packages";
import weddingShootsPricings from "../../../../public/data/services/weddingShootsPricings.json";
import WhatsAppButton from "@/components/Whatsapputton";


export default function WeddingShoots() {


    return(
        <>
        <Header/>


        <Intro
    title="Wedding Shoots"
    description="From the vows to the first dance, our wedding photography ensures every part of your big day is documented with artistry and care. We create a visual story that you’ll treasure for a lifetime."
/>

        <Packages packages={weddingShootsPricings} />
        <Reachout
    heading="Ready to make memories that last a lifetime?"
    description="We’re passionate about turning your wedding into an unforgettable story told through timeless photos filled with love, laughter, and all the magical details."
    buttonText="Reach out to us"
    buttonLink="/contact"
/>



        <Footer/>
        <Copyrights/>
        <WhatsAppButton/>

        </>
    );
}