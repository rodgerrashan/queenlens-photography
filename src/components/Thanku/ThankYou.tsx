import { FaCloud, FaInstagram, FaFacebook } from "react-icons/fa";
import { cinzelFont} from "@/styles/fonts";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-start   p-6 pt-1 text-center mb-16 mt-5 min-h-96 ">
      <h1 className={`${cinzelFont.className} text-2xl font-bold text-black mb-4 uppercase`}>
        Thank You for Reaching Out!
      </h1>
      <p className="text-gray-700 max-w-2xl mb-4">
        We’re thrilled to hear from you and can’t wait to learn more about your vision. Our team at
        Queenlens Photography will review your message and get back to you shortly.
      </p>
      <p className="text-gray-700 max-w-2xl mb-12">
        In the meantime, feel free to explore our gallery or follow us on social media for more
        inspiration and updates. We’re looking forward to creating something beautiful together!
      </p>
      <div className="flex gap-3 flex-col md:flex-row">

        <Link
            href="/gallery"
            className="flex items-center gap-2 bg-gray-100 px-5 py-3 rounded-lg  hover:bg-gray-900 hover:text-slate-50 transition duration-500">
                <FaCloud className=" text-2xl" /> Gallery

        </Link>
        <a
          href= 'https://www.instagram.com/queenlens_photography/profilecard/?igsh=ZHp4OWM0enJraDlv'
          className="flex items-center gap-2 bg-gray-100 px-5 py-3 rounded-lg  hover:bg-gray-900 hover:text-slate-50 transition duration-500"
        >
          <FaInstagram className="text-2xl" /> Instagram
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=61562502455213&mibextid=ZbWKwL'
          className="flex items-center gap-2 bg-gray-100 px-5 py-3 rounded-lg  hover:bg-gray-900 hover:text-slate-50 transition duration-500"
        >
          <FaFacebook className="text-2xl" /> Facebook
        </a>
      </div>
    </div>
  );
}
