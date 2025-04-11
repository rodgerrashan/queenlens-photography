import Link from "next/link";

interface AdMsgProps {
  title: string;
  description: string;
  button_text: string;
  bg_image: string;
}

const AdMsg: React.FC<AdMsgProps> = ({ title, description, button_text, bg_image }) => {
  return (
    <div className="max-w-xl sm:max-w-3xl md:max-w-5xl relative flex flex-col items-center justify-center bg-cover bg-center my-2 rounded-xl mx-auto" style={{ backgroundImage: `url(${bg_image})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-80 rounded-xl mx-5">
      </div>
      <div className="relative z-10 text-white text-center px-6 py-2">
        <div className="relative z-10 p-4 bg-opacity-50 rounded-lg">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-4 max-w-lg">{description}</p>
          <Link
          href = '/contact'>
            <button className="font-bold border-2 border-white mt-4 px-4 py-2 rounded-full hover:bg-slate-50 hover:text-gray-950 transition-all duration-500">{button_text}</button>
            

          </Link>
          </div>
          
      </div>
    </div>
    
  );
};

export default AdMsg;