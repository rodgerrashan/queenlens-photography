interface AdMsgProps {
    title: string;
    description: string;
    button_text: string;
    bg_image: string;
  }
  
  const AdMsg: React.FC<AdMsgProps> = ({ title, description, button_text, bg_image }) => {
    return (
      <div className="max-w-5xl relative flex flex-col items-center justify-center h-52 bg-cover bg-center my-6 rounded-xl mx-auto" style={{ backgroundImage: `url(${bg_image})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl">
        </div>
        <div className="relative z-10 text-white text-center p-6">
          <div className="relative z-10 p-4 bg-opacity-50 rounded-lg">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="mt-4">{description}</p>
            <button className="border-2 border-white mt-4 px-4 py-2 rounded-full hover:bg-slate-50 hover:text-gray-950 transition-all duration-500">{button_text}</button>
      </div>
        </div>
      </div>
      
    );
  };

  export default AdMsg;