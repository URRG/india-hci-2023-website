'use client';

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function Video({
    className = '',
    src,
    autoPlay = false,
    ...props
}) {
    const [canAutoPlay, setCanAutoPlay] = useState(false);

    const ref = useRef();

    useEffect(() => {
        // Check if autoplay is supported
        const video = document.createElement('video');
        video.src = src;
        const promise = video.play();

        if (promise !== undefined) {
            promise
                .then(() => {
                    setCanAutoPlay(true);
                    video.remove();
                })
                .catch(() => {
                    setCanAutoPlay(false);
                    video.remove();
                });
        }
    }, [src]);

    useEffect(() => {
        // Play video if autoplay is enabled and supported
        if (autoPlay && canAutoPlay) {
            ref?.current?.play();
        }
    }, [autoPlay, canAutoPlay, ref]);

    return (
        <video
            className={className}
            src={src}
            playsInline
            loop
            muted
            disablePictureInPicture
            tabIndex="-1"
            ref={ref}
            {...props}
        />
    );
}

Video.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    autoPlay: PropTypes.bool,
};
