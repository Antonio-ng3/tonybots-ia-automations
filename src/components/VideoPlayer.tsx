import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, SkipBack } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setIsMuted(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const rewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 5);
    }
  };

  const changeSpeed = () => {
    const newRate = playbackRate >= 2 ? 1 : playbackRate + 0.5;
    setPlaybackRate(newRate);
    if (videoRef.current) {
      videoRef.current.playbackRate = newRate;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => {
        setIsPlaying(false);
        setShowControls(true);
      };

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <div className={`video-container ${className}`}>
      <div className="video-wrapper">
        {/* Sound Badge */}
        {isMuted && showControls && (
          <div 
            className="position-absolute top-0 start-0 m-3 px-3 py-2 bg-dark bg-opacity-75 text-white rounded d-flex align-items-center gap-2"
            style={{ zIndex: 3, cursor: 'pointer' }}
            onClick={toggleMute}
          >
            <Volume2 size={20} />
            <span className="small fw-bold">ATIVAR SOM</span>
          </div>
        )}

        {/* Video Element */}
        <video
          ref={videoRef}
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: 'cover' }}
          preload="metadata"
          muted={isMuted}
          onClick={togglePlay}
        >
          <source src={src} type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>

        {/* Play Button */}
        {(!isPlaying || showControls) && (
          <Button
            className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-75 border border-light rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '80px', height: '80px', zIndex: 4 }}
            onClick={togglePlay}
          >
            <div 
              className="border-start border-light"
              style={{ 
                width: 0, 
                height: 0, 
                borderTop: '12px solid transparent',
                borderBottom: '12px solid transparent',
                borderLeftWidth: '22px',
                borderLeftColor: 'white',
                marginLeft: '4px'
              }}
            />
          </Button>
        )}

        {/* Control Buttons */}
        <div className="position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-between" style={{ zIndex: 4 }}>
          <Button
            size="sm"
            className="bg-dark bg-opacity-75 border border-light text-white"
            onClick={rewind}
          >
            <SkipBack size={16} className="me-1" />
            5s
          </Button>

          <Button
            size="sm"
            className="bg-dark bg-opacity-75 border border-light text-white"
            onClick={changeSpeed}
          >
            {playbackRate}×
          </Button>
        </div>
      </div>
    </div>
  );
};