import { cedarvilleCursiveFont } from "@/styles/fonts";



export default function FinalNotes(){
    return(
        <>
        <div className="flex flex-col items-center justify-center mb-10">
            <div className="max-w-3xl flex flex-col  justify-center p-3">
                <h3 className="text-2xl font-bold mb-5 text-left">We Can’t Wait to Capture Your Story!</h3>
                <p className="text-lg font-medium mb-2 max-w-2xl"> At Queenlens Photography, every session is a chance to create beautiful memories that will last a lifetime. From weddings to family moments and everything in between, we’re here to make your vision come to life with artistry, passion, and attention to detail.</p>
                <p className="text-lg font-medium mb-2 max-w-2xl">Ready to get started? Reach out today, and let’s begin this exciting journey together. Your story deserves to be told beautifully — we’re honored to be a part of it.</p>
                <div className = "flex flex-col items-end justify-center mt-5 pr-20">
                <p className = {`${cedarvilleCursiveFont.className} text-2xl text-left font-bold`}>- QueenLens Photography</p>
                    
                </div>
                


            </div>
        </div>
        
        </>
    );
}