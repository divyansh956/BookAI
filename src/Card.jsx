// Card.js
import { useState } from 'react';

const Card = ({ image, title, description }) => {
    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMore = () => setIsReadMore(!isReadMore);

    const maxLength = 130;

    return (
        <div className="shadow-md rounded-lg overflow-hidden bg-[#FFFFFF0D] p-5 transform transition-transform duration-300 hover:-translate-y-2">
            <img src={image} alt={title} className="h-96 rounded-lg mx-auto" />
            <div className="p-4 flex flex-col justify-center items-center">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-200 text-lg text-center italic">
                    {description.length > maxLength ? (
                        <>
                            {isReadMore ? `"${description}"` : `"${description.substring(0, maxLength)}..."`}
                            <div
                                onClick={toggleReadMore}
                                className="text-[#8a2be2] hover:text-white cursor-pointer mt-2"
                            >
                                {isReadMore ? ' Show Less' : ' Read More'}
                            </div>
                        </>
                    ) : (
                        description
                    )}
                </p>
            </div>
        </div>
    );
};

export default Card;
