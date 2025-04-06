import Intro from "@/components/ServicesCat/intro";
import Reachout from "@/components/ServicesCat/Reachout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Packages from "@/components/ServicesCat/Packages";
import coupleMemoriesPricings from "../../../../public/data/services/coupleMemoriesPricings.json";

export default function CoupleMemories() {
    return (
        <>
            <Header />

            <Intro
                title="Couple Memories"
                description="Celebrate your love story with our Couple Memories photography. From candid moments to timeless portraits, we capture the essence of your bond with creativity and care."
            />

            <Packages packages={coupleMemoriesPricings} />

            <Reachout
                heading="Ready to capture your love story?"
                description="Let us help you preserve the special moments of your journey together. Reach out to us to create memories that will last a lifetime."
                buttonText="Contact Us"
                buttonLink="/contact"
            />

            <Footer />
            <Copyrights />
        </>
    );
}
