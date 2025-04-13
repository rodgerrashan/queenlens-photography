
import Intro from "@/components/ServicesCat/intro";
import Reachout from "@/components/ServicesCat/Reachout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Packages from "@/components/ServicesCat/Packages";
import weddingShootsPricings from "../../../../public/data/services/garduationFramesPricings.json";
import WhatsAppButton from "@/components/Whatsapputton";
import Seo from "@/components/Seo";


export default function GraduationFrames() {
    const title = "Graduation Photography | Celebrate Achievements with Queenlens";
  const description = "Mark your academic milestones with stunning graduation photos by Queenlens. Perfect for keepsakes and announcements.";
  const keywords = "graduation photography, academic portraits, milestone photoshoots";


    return(
        <>


<Seo title = {title} description={description} keywords={keywords}/>


        <main>
        <Header/>

<Intro
title="Graduation Frames"
description="Celebrate your academic achievements with our premium graduation photography services. We specialize in capturing the pride, joy, and excitement of your big day, creating timeless memories that you can cherish forever."
/>

<Packages packages={weddingShootsPricings} />
<Reachout

heading="Ready to commemorate your graduation in style?"
description="Let us help you preserve the memories of your special day with stunning photographs that showcase your success and hard work. Reach out to us today to book your session!"
buttonText="Contact Us"
buttonLink="/contact"
/>

<Footer/>
<Copyrights/>
<WhatsAppButton/>



        </main>



            

        </>
    );
}