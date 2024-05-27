// VideoComponent.tsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const VideoComponent = ({poster, src}:{poster:string, src:string}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const observer = useRef<IntersectionObserver | null>(null);
    // const videoRef = useRef<HTMLVideoElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const controlsVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 }
    };

    useEffect(() => {
        if (videoRef.current) {
          console.log("asdf")
            observer.current = new IntersectionObserver(
                async ([entry]) => {
                  console.log(entry)
                    // Check if the video is visible
                    if (entry.isIntersecting) {
                        // Play the video
                        try {
                          await videoRef.current?.play(); // Attempt to play the video
                        } catch (error) {
                            if (error instanceof DOMException && error.name === 'NotAllowedError') {
                                // Autoplay was prevented, mute the video and try again
                                console.log("bbbb")
                                if (videoRef.current)
                                  videoRef.current.muted = true;
                                await videoRef.current?.play();
                            } else {
                                // Handle other errors
                                console.error('Failed to play video:', error);
                            }
                        }
                    }
                },
                {
                    rootMargin: '0px',
                    threshold: 0.5,
                }
            );

            observer.current.observe(videoRef.current);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);

    return (
        <motion.div 
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={controlsVariants}
          transition={{ duration: 0.5 }}
          ref={wrapperRef}
          >
            <motion.video
              ref={videoRef}
                playsInline
                disableRemotePlayback
                disablePictureInPicture
                autoPlay
                poster={poster}
                src={src}                
                typeof={"video/mp4; codecs=&quot;hvc1&quot;"} 
                className='min-h-[70vh] sm:min-h-[70vh] object-cover'
            >
                {/* <source src="https://www.paypalobjects.com/marketing/web/US/en/quantum-leap/home/hero/ql-home-page-hero-may-desktop-hevc.mp4#t=0.01" type="video/mp4; codecs=&quot;hvc1&quot;" /> */}
            </motion.video>
        </motion.div>
    );
};

export default VideoComponent;