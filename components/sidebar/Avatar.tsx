import React from 'react'

type AvatarProps = {
    imageURL: string;
    onClick: () => void;
};

export default function Avatar({ imageURL, onClick }: AvatarProps) {
    return (
        <button
            className="p-2.5 rounded-md hover:bg-primary-light transition-colors duration-200 group"
            onClick={onClick}
        >
            <img
                src={imageURL}
                alt="User Avatar"
                className="h-8 w-8 rounded-md object-cover"
            />
        </button>
    );
}
