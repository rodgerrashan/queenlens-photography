import { cinzelFont, latoFont } from "@/styles/fonts";


interface IntroProps {
    title: string;
    description: string;
}
export default function Intro({ title, description }:IntroProps) {
    return (
        <div>
            <h2 className={`${cinzelFont.className} pt-6 text-4xl font-bold text-center text-gray-950 px-4`}>{title}</h2>
            <p className={`${latoFont.className} mt-4 max-w-2xl mx-auto text-center text-gray-950 px-4 pb-1 mb-1`}>
                {description}
            </p>
        </div>
    );
}