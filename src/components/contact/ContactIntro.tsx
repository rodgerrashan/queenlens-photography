import { cinzelFont, latoFont } from "@/styles/fonts";
export default function ContactIntro() {
    return (
        <>
        <div>
                    <div >
                    <h2 className= {`${cinzelFont.className} pt-6 text-3xl font-bold text-center text-gray-950 px-8`}>We’d Love to Hear from You!</h2>
                    <p className= {`${latoFont.className}  mt-4 max-w-2xl mx-auto text-center  text-gray-950  px-8 pb-3`}>
                    Whether you’re ready to book a session, curious about our services, or just have questions, we’re here to help. Let’s capture memories that you’ll cherish for a lifetime.
                    </p>
        
                </div>
        
                </div>

                
        
        </>
    );
}