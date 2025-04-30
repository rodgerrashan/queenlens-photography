import Link from "next/link";

interface AdMsgProps {
  title: string;
  description: string;
  button_text: string;
  bg_image: string;
}

const AdMsg: React.FC<AdMsgProps> = ({ title, description, button_text, bg_image }) => {
  return (
    <div
      className="max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl  relative flex flex-col items-center justify-center rounded-xl mx-auto my-1 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url(${bg_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 text-white text-center px-8 py-10 sm:py-14">
        <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
        <p className="mt-4 max-w-lg mx-auto">{description}</p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-2 border-2 border-white rounded-full font-bold hover:bg-white hover:text-gray-950 transition-all duration-500">
            {button_text}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdMsg;
