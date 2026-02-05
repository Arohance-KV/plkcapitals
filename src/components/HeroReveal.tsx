import { useRef } from "react";
import transitionVideo from "../assets/transition.mp4";

interface HeroRevealProps {
    onComplete: () => void;
}

export const HeroReveal = ({ onComplete }: HeroRevealProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoEnd = () => {
        // Optional: fade out logic could go here, but for now we just trigger complete
        onComplete();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-plk-navy">
            <video
                ref={videoRef}
                src={transitionVideo}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover"
            />
        </div>
    );
};

