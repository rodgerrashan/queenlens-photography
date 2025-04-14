import Intro from "@/components/ServicesCat/intro";
import Reachout from "@/components/ServicesCat/Reachout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Packages from "@/components/ServicesCat/Packages";
import casualClicksPricings from "../../../../public/data/services/EventMemoriesPricings.json";
import WhatsAppButton from "@/components/Whatsapputton";

import Seo from "@/components/Seo";

export default function EventMemories() {

const title = "Event Photography | Professional Coverage by Queenlens";
  const description = "From corporate events to private celebrations, trust Queenlens for expert event photography that captures every detail.";
  const keywords = "event photography, corporate event photographers, celebration coverage";
    return (
        <>
        <Seo title = {title} description={description} keywords={keywords}/>


        <main>
        <Header />

<Intro
    title="Event Memories"
    description="From grand celebrations to intimate gatherings, we capture every meaningful moment. Let us turn your special event into a timeless visual story through our professional event photography."
/>

<Packages packages={casualClicksPricings} />
<Reachout
    heading="Let’s capture your next big event"
    description="Whether it's a wedding, birthday, or corporate event, we’re here to preserve the laughter, emotions, and unforgettable memories in stunning detail."
    buttonText="Book your event coverage"
    buttonLink="/contact"
/>

<Footer />
<Copyrights />
<WhatsAppButton/>

        </main>
            
        </>
    );
}
