import Intro from "@/components/ServicesCat/intro";
import Reachout from "@/components/ServicesCat/Reachout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Packages from "@/components/ServicesCat/Packages";
import casualClicksPricings from "../../../../public/data/services/EventMemoriesPricings.json";
import WhatsAppButton from "@/components/Whatsapputton";

export default function EventMemories() {
    return (
        <>
            <Header />

            <Intro
                title="Event Memories need to e make"
                description="Celebrate the beauty of everyday life with our casual photography. From spontaneous smiles to candid moments, we create memories that feel natural and timeless."
            />

            <Packages packages={casualClicksPricings} />
            <Reachout
                heading="Ready to capture life's simple joys?"
                description="Let us help you turn ordinary moments into extraordinary memories that you’ll cherish forever."
                buttonText="Contact us to get started"
                buttonLink="/contact"
            />

            <Footer />
            <Copyrights />
            <WhatsAppButton/>
        </>
    );
}
