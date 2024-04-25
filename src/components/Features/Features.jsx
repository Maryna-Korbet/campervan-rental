export const Features = ({ setActiveButton }) => {

    const handleButtonClick = () => {
        setActiveButton('features');
    };

    return (
        <div onClick={handleButtonClick}>Features</div>
    );
};