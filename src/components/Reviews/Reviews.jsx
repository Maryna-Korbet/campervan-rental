import React from 'react';
import RatingStar from '../RatingStar/RatingStar';
import BookingForm from '../BookingForm/BookingForm';
import {
    ReviewsContainer,
    ReviewsList,
    ReviewsItem,
    ReviewerContainer,
    ReviewerAvatar,
    AvatarLetter,
    ReviewerInfo,
    ReviewerName,
    ReviewerRating,
    ReviewerСomment,
    ReviewsContent,
} from '../Reviews/Reviews.styled';

export const Reviews = ({ setActiveButton, reviews }) => {
    const handleButtonClick = () => {
        setActiveButton('reviews');
    };

    return (
        <ReviewsContainer onClick={handleButtonClick}>
            <ReviewsContent>
            <ReviewsList>
                {reviews.map((review, index) => (
                    <ReviewsItem key={index}>
                        <ReviewerContainer>
                            <ReviewerAvatar>
                                <AvatarLetter>
                                    {review.reviewer_name.charAt(0)}
                                </AvatarLetter>
                            </ReviewerAvatar>

                            <ReviewerInfo>
                                <ReviewerName>{review.reviewer_name}</ReviewerName>

                                <ReviewerRating style={{ marginBottom: '5px' }}>
                                    {Array.from({ length: review.reviewer_rating }, (_, i) => (
                                        <RatingStar key={i} />
                                    ))}
                                </ReviewerRating>
                            </ReviewerInfo>
                        </ReviewerContainer>
                        <ReviewerСomment>{review.comment}</ReviewerСomment>
                    </ReviewsItem>
                ))}
            </ReviewsList>

            <BookingForm />
            </ReviewsContent>
        </ReviewsContainer>
    );
};