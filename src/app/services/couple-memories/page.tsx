import Intro from "@/components/ServicesCat/intro";
import Reachout from "@/components/ServicesCat/Reachout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Packages from "@/components/ServicesCat/Packages";
import coupleMemoriesPricings from "../../../../public/data/services/coupleMemoriesPricings.json";
import WhatsAppButton from "@/components/Whatsapputton";
import Seo from "@/components/Seo";

export default function CoupleMemories() {
    const title = "Couple Photography | Romantic Shoots by Queenlens";
  const description = "Capture your love with Queenlens couple shoots. Perfect for engagements or just celebrating your bond.";
  const keywords = "couple photography, engagement photoshoots, romantic portraits";
    return (
        <>
        <Seo title = {title} description={description} keywords={keywords}/>



        <main>

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
<WhatsAppButton/>



        </main>
            
        </>
    );
}
