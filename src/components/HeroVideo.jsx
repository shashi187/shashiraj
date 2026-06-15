import React, { useRef, useEffect } from "react";

const HeroVideo = ({ src, className, style }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!videoRef.current) return;
                    if (entry.isIntersecting) {
                        videoRef.current.play().catch(() => {});
                    } else {
                        videoRef.current.pause();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (videoRef.current) observer.observe(videoRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className={className}
            style={style}
        >
            <source src={src} type="video/webm" />
        </video>
    );
};

export default HeroVideo;