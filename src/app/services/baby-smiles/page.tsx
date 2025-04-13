import Intro from "@/components/ServicesCat/intro";
import Reachout from "@/components/ServicesCat/Reachout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Packages from "@/components/ServicesCat/Packages";
import babySmilesPricings from "../../../../public/data/services/babySmilesPricings.json";
import WhatsAppButton from "@/components/Whatsapputton";
import Seo from "@/components/Seo";

export default function BabySmiles() {

    const title = "Baby Photography | Adorable Moments by Queenlens";
  const description = "Preserve your baby's first moments with professional baby photography by Queenlens. Cute and heartwarming shots guaranteed.";
  const keywords = "baby photography, newborn photoshoot, baby portraits";
    return (
        <>
        <Seo title = {title} description={description} keywords={keywords}/>


        <main>
        <Header />

<Intro
    title="Baby Smiles"
    description="Capture the purest moments of your little one with our baby photography. From their first giggles to their tiny toes, we create memories that you’ll cherish forever."
/>

<Packages packages={babySmilesPricings} />
<Reachout
    heading="Ready to capture your baby's precious moments?"
    description="We’re here to turn your baby’s smiles into timeless memories that you’ll treasure for a lifetime."
    buttonText="Reach out to us"
    buttonLink="/contact"
/>

<Footer />
<Copyrights />
<WhatsAppButton/>



        </main>
            
        </>
    );
}
