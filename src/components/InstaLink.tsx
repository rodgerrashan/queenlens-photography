export default function InstaLink() {
  return (
    <div
      className="relative  bg-blue-950 bg-fixed bg-cover bg-center mt-8 h-52"
      style={{ backgroundImage: "url('/images/instaLink/imgBg.jpg')" }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black bg-opacity-50 w-auto h-auto px-5 py-1 rounded-2xl">
          <div className="text-white text-xl text-center neon-text font-bold">
            <a href="https://www.instagram.com/queenlens_photography/profilecard/?igsh=ZHp4OWM0enJraDlv" className="hover:underline">@instagram.com/queenlens_photography/</a>
          </div>
        </div>
      </div>
    </div>
  );
}
