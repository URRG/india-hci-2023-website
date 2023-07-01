import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

function ImageCursor({
    parentRef,
    imageSrc,
    imageAlt,
    imageSize,
    imagePosition,
    shouldSnapBack,
}) {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isOutsideParent, setIsOutsideParent] = useState(false);

    const imageRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const parentBounds = parentRef.current.getBoundingClientRect();
            const isOutsideParentBounds =
                event.clientX < parentBounds.left ||
                event.clientX > parentBounds.right ||
                event.clientY < parentBounds.top ||
                event.clientY > parentBounds.bottom;

            setIsOutsideParent(isOutsideParentBounds);
            setCursorPosition({
                x: event.clientX - parentBounds.left,
                y: event.clientY - parentBounds.top,
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [parentRef]);

    const getImageStyle = () => {
        if (isOutsideParent && shouldSnapBack) {
            return {
                ...imagePosition,
                position: 'absolute',
                width: imageSize,
                height: imageSize,
                transition: 'transform 0.3s',
                opacity: 1,
            };
        }
        return {
            position: 'absolute',
            left: cursorPosition.x,
            top: cursorPosition.y,
            width: imageSize,
            height: imageSize,
            transition: 'transform 0.3s',
            transform: 'translate(-50%, -50%)',
            opacity: 1,
        };
    };

    return (
        <Image
            src={imageSrc}
            alt={imageAlt || 'Cursor Image'}
            width={imageSize}
            height={imageSize}
            style={getImageStyle()}
            ref={imageRef}
        />
    );
}

ImageCursor.propTypes = {
    parentRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
    imageSize: PropTypes.number.isRequired,
    imagePosition: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number,
    }).isRequired,
    shouldSnapBack: PropTypes.bool,
};

ImageCursor.defaultProps = {
    imageAlt: '',
    shouldSnapBack: true,
};

export default React.memo(ImageCursor);
