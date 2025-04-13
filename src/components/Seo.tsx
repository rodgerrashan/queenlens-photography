import Head from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  keywords: string;
}

export default function Seo({ title, description, keywords }: SeoProps) {
    const commonKeywords = "wedding photographer, wedding photographers in sri lanka, wedding photography packages sri lanka, top 10 photographers in sri lanka, model photographers in sri lanka, Famous model photographers in sri lanka, Top model photographers in sri lanka, Female model photographers in sri lanka, Sri Lanka Wedding Photography Packages, Wedding Photography Sri Lanka, Wedding photography packages sri lanka price, Best wedding photographers in Sri Lanka, Top 10 photographers in sri lanka with price, Hire the best Photographers in Sri Lanka, Wedding Photography in Kandy, Sri Lanka, Photographers - Sri Lanka, Photographer jobs, Famous photographer, Photographer near me, Photographer in Sri Lanka, Colombo Photographers, Hire a Photographer for Photoshoot in Sri Lanka, queenlens, Queenlens photography, SL-Photography, Sl photography sri lanka, Sl photography photos, Hire the best Videographers in Sri Lanka, Videographers in Sri Lanka, Color grading, Photo editing, video editing ,content creation, Video production Sri Lanka, Media Production, Professional Photographer, Professional Photography & Videography, Video Productions, Sri Lankan Wedding Videographer, Pre-Wedding Photographer, Pre Shoot Location Sri Lanka, Preshoot in Sri Lanka, New pre shoot photos in Sri Lanka, Wedding pre shoot photos, Preshoot Ideas, Couple shoots ideas, Couple shoots, Couple photoshoot poses, Couple shoots at home, Casual-shoots, Photos from Casual Shoots, Photo Printing, Print it Photo Framing Sri Lanka, Custom Photo frames sri lanka, photo Frame price in sri lanka, Fashion model, Model girl, Model photoshoot poses, Model photoshoot ideas, Model photoshoot, Model photography, Sri Lankan Photographers & Models, Model Photography Projects, Models And Photographers, Model Photo Shoots, Model photography near me, Sri Lankan Latest Female and Male Models, Lkmodels, Lk model zone, Sri lanka models hot photos, Brides Of Sri Lanka, Weddings Sri Lanka, colorgrading, Color grading, Color grading sri lanka online, Color grading sri lanka price, Best color grading sri lanka, Free color grading sri lanka, Product photography sri lanka price, Freelance product photography sri lanka, Best product photography sri lanka, Fashion photographers in Sri lanka, Product photography sri lanka online, Model Photographers in Sri Lanka, Product and Commercial Photography Sri Lanka, Hire the best Product Photographers in Sri Lanka, Product Photography Sri Lanka, Photo Shoot for Products, Birthday Shoot girl Sri Lanka, Birthday shoot srilanka packages, Birthday shoot srilanka price, Birthday Party Photography, Sri Lankan Baby Photographer, Birthday Photoshoot Sri Lanka, Birthday Shoot Srilanka, SUPESHALA MADUSANKA PHOTOGRAPHY, Babies Photoshoot Sri Lanka, Baby shoot sri lanka near me, Baby shoot sri lanka online, Best baby shoot sri lanka, Baby Shoot Idea Srilanka - Photography, Child Photography.LK, Teeny Caps Baby Photography, event photography sri lanka, event photography prices in sri lanka, Hire the best Event Photographers in Sri Lanka, Event photography, Small event photography prices in sri lanka, Event Photography Sri Lanka, Wedding event photography prices in sri lanka, Birthday Photography packages in Sri lanka, Video & Photography Services in Sri Lanka, Rent Event Photography, Budget wedding packages Sri Lanka, Photoshoots in kandy prices, Photoshoots in kandy for couples, Indoor photoshoots in kandy, Cheap photoshoots in kandy, Outdoor photoshoots in kandy, Best photoshoots in kandy, Free photoshoots in kandy, Kandy photoshoot locations";

    

  return (
    <Head>
    <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta name="keywords" content={`${keywords} ${commonKeywords}`} />
        <meta name="author" content="QueenLens Photography" />

        {/* Open Graph for social media preview */}
        <meta property="og:title" content="QueenLens | Professional Photography Services in Sri Lanka" />
        <meta property="og:description" content="Capture your best moments with QueenLens – specializing in wedding, event, and portrait photography in Sri Lanka." />
        <meta property="og:image" content="https://www.queenlens.lk/images/logo/brand.png" />
        <meta property="og:url" content="https://www.queenlens.lk" />
        <meta property="og:type" content="website" />

        {/* Structured Data: Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "QueenLens",
              "url": "https://www.queenlens.lk",
              "logo": "https://www.queenlens.lk/images/logo/brand.png",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61562502455213&mibextid=ZbWKwL", 
                "https://www.instagram.com/queenlens_photography/profilecard/?igsh=ZHp4OWM0enJraDlv",
                "https://youtube.com/@queenlensphotography?si=JYjRN8jpF-EA9mZ4",
                "https://www.tiktok.com/@queenlens_photography",
                "https://wa.me/+94719991164",
                "tel:+94719991164",
              ]
            }),
          }}
        />

    </Head>
  );
}
