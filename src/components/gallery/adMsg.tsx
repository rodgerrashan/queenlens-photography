interface AdMsgProps {
  title: string;
  description: string;
  button_text: string;
  bg_image: string;
}

const AdMsg: React.FC<AdMsgProps> = ({ title, description, button_text, bg_image }) => {
  return (
    <div
      className="relative  mx-auto my-2 flex flex-col items-center justify-center h-52 bg-cover bg-center rounded-xl"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f8fafc,_transparent)] opacity-90 rounded-xl" />

      {/* Content */}
      <div className="relative z-10 text-gray-950 text-center p-6">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mt-2 max-w-lg mx-auto">{description}</p>
        <button className="mt-4 px-5 py-2 border-2 border-gray-950 rounded-full font-bold hover:bg-gray-950 hover:text-slate-50 transition-all duration-500">
          {button_text}
        </button>
      </div>
    </div>
  );
};

export default AdMsg;
