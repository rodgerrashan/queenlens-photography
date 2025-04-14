import Intro from "@/components/ServicesCat/intro";
import Reachout from "@/components/ServicesCat/Reachout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Packages from "@/components/ServicesCat/Packages";
import casualClicksPricings from "../../../../public/data/services/ModelGracePricings.json";
import WhatsAppButton from "@/components/Whatsapputton";
import Seo from "@/components/Seo";

export default function ModelGrace() {

    const title = "Model Photography | Fashion & Glamour by Queenlens";
    const description = "Elevate your portfolio with professional model shoots by Queenlens. Fashion-forward and creative imagery tailored to you.";
    const keywords = "model photography, fashion photoshoots, glamour portraits";

    return (
        <>

        <Seo title = {title} description={description} keywords={keywords}/>
        <main>

        <Header />

<Intro
    title="Model Grace"
    description="Model Grace brings timeless charm and versatility to every shoot with her graceful poses and expressive features"
/>

<Packages packages={casualClicksPricings} />
<Reachout
    heading="Let’s create your signature look"
    description="From high-fashion poses to timeless glamour, we’ll help you build a standout portfolio that captures your unique style and beauty."
    buttonText="Book your shoot now"
    buttonLink="/contact"
/>

<Footer />
<Copyrights />
<WhatsAppButton/>


        </main>
            
        </>
    );
}
