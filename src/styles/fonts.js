
import { Cinzel, Lato, Lora,Montserrat_Alternates } from "next/font/google";

export const montserratAlternatesFont = Montserrat_Alternates({
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