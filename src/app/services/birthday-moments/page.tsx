
import Intro from "@/components/ServicesCat/intro";
import Reachout from "@/components/ServicesCat/Reachout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Packages from "@/components/ServicesCat/Packages";
import bdayShootsPricings from "../../../../public/data/services/birthdayMomentsPricings.json";
import WhatsAppButton from "@/components/Whatsapputton";
import Seo from "@/components/Seo";


export default function BirthdayMoments() {

    const title = "Birthday Photography | Celebrate Special Days with Queenlens";
  const description = "Make birthdays unforgettable with creative birthday photoshoots by Queenlens. Perfect for all ages and themes.";
  const keywords = "birthday photography, party photoshoots, birthday celebration portraits";


    return(
        <>
        <Seo title = {title} description={description} keywords={keywords}/>



        <main>
        <Header/>

<Intro
    title="Birthday Moments"
    description="Celebrate your special day with stunning photography that captures the laughter, joy, and magic of your birthday. From blowing out the candles to heartfelt moments with loved ones, we’ll preserve every detail so you can relive the memories forever."
/>

<Packages packages={bdayShootsPricings} />
<Reachout
    heading="Let’s Make Your Birthday Truly Memorable!"
    description="Turn your birthday into a story worth cherishing with our expert photography. From vibrant smiles to candid moments, we’re here to create timeless keepsakes of your celebration."
    buttonText="Book Your Birthday Shoot"
    buttonLink="/contact"
/>

<Footer/>
<Copyrights/>
<WhatsAppButton/>


        </main>
            
        </>
    );
}