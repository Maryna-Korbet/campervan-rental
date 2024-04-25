export const Reviews = ({ setActiveButton }) => {

    const handleButtonClick = () => {
        setActiveButton('reviews');
    };

    return (
        <div onClick={handleButtonClick}>Reviews</div>
    );
};