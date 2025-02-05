
import { Cinzel, Lato, Lora,Montserrat_Alternates,Open_Sans,Montserrat } from "next/font/google";


export const  openSansFont = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-open-sans',
});

export const montserratAlternatesFont = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '700'], 
});


export const montserratFont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

export const cinzelFont = Cinzel({
    subsets: ["latin"],
    weight: ["400", "700"], 
  });
  
  export const latoFont = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"], 
  });

  export const loraFont = Lora({
    subsets: ["latin"],
  });