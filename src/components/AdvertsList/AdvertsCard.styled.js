import styled from 'styled-components';

export const AdvertCardList = styled.ul`
    display:flex;
    flex-direction: column;
   

    @media only screen and (max-width: 768px) {
        
    }

    @media (min-width: 1280px) {
    
    }
`;

export const AdvertCardContainer = styled.li`
    display: flex;
    padding: 24px;  
    border-radius: ${p => p.theme.radius.m};
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.border}`};
    background: ${p => p.theme.backgroundColor.main};
`;

export const AdvertCardItem = styled.div`
    display: flex;
    gap: 24px;
`;

export const AdvertCardImg = styled.img`
    display: block;
    width: 290px;
    height: 310px;
    border-radius: ${p => p.theme.radius.s};
`;    

export const AdvertCardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
`;

export const AdvertPrice = styled.h3`
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    line-height: ${p => p.theme.lineHeights.h1};
    color: ${p => p.theme.colors.main};
`;

export const AdvertPriceSection = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const AdvertFavorite = styled.svg`
    display: block;
    width: 20px;
    height: 18px;
    top: 3px;
    left: 1.6px;
    border: 2.3px solid ${p => p.theme.colors.main};
`;



// export const ClassicButton = styled.button`
//     display:flex;
//     justify-content: center;
//     align-items: center;
//     font-style: normal;
//     padding: 8px 30px;

//     gap: 10px;
//     border-radius: ${p => p.theme.radius.l};
//     opacity: ${p => p.theme.opacity.none};

//     font-family: ${p => p.theme.fonts.main};
//     font-size: ${p => p.theme.fontSizes.sx};
//     font-weight: ${p => p.theme.fontWeights.medium};
//     line-height: ${p => p.theme.lineHeights.button};
//     letter-spacing: ${p => p.theme.letterSpacing.button};
//     text-align: left;

//     background-color: ${p => p.theme.backgroundColor.button};
//     color: ${p => p.theme.colors.buttonText};

//     transition: ${p => p.theme.transition.cubicBezier};
//     transform: ${p => p.theme.transform.scaleSecond};
//     cursor: pointer;

//     &:hover {
//         background-color: ${p => p.theme.backgroundColor.buttonActive};
//     }

//     @media only screen and (max-width: 768px) {
//         padding: 10px 40px;
//         font-size: ${p => p.theme.fontSizes.s};
//     }

//     @media (min-width: 768px) {
//         padding: 16px 60px;
//     }
// `;