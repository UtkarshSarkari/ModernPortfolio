import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
    {
        name: "Yuvraj",
        username: "@yuvrajkori",
        body: "His expertise in web development consistently shines through in his outstanding work!",
        img: "./assets/yuvraj.jpg",
    },
    {
        name: "Anurag",
        username: "@anuraggoel",
        body: "The attention to detail and precision in his projects are truly commendable!",
        img: "./assets/anurag.jpg",
    },
    {
        name: "Shreyal",
        username: "@shreyalsrivastava",
        body: "His innovative approach to web development continues to set him apart!",
        img: "./assets/shreyal.jpg",
    },
    {
        name: "Amrit",
        username: "@amritchauhan",
        body: "The quality and efficiency of his web solutions are simply remarkable!",
        img: "./assets/amrit.jpg",
    },
    {
        name: "Ayush",
        username: "@ayushsharma",
        body: "He has an incredible talent for turning complex ideas into seamless, functional applications!",
        img: "./assets/ayush.jpg",
    },
    {
        name: "Srishti",
        username: "@srishtisrivastava",
        body: "His dedication to crafting top-notch web experiences is evident in every project he delivers!",
        img: "./assets/srishti.jpg",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function Review() {
    return (
        <div className="flex items-center justify-center flex-col py-60">
            <div className="font-bold text-5xl text-white/60 flex items-center gap-2">What People Say About Me<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-11">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            </div>
            <div className="relative flex h-[300px] mt-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-[#161925]">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#161925]"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#161925]"></div>
            </div>
        </div>
    );
}
