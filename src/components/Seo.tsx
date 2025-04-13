import Head from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  keywords: string;
}

export default function Seo({ title, description, keywords }: SeoProps) {
  return (
    <Head>
    <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta name="keywords" content={keywords} />
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
