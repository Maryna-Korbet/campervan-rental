import styled from 'styled-components';

export const ReviewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 44px;
`;

export const ReviewsList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 430px;
    gap: 24px;
`;

export const ReviewsItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ReviewerContainer = styled.div`
    display: flex;
    align-items: center;    
    gap: 16px;
`;

export const ReviewerAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${p => p.theme.backgroundColor.details};
`;

export const AvatarLetter = styled.div`
    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    line-height: ${p => p.theme.lineHeights.h1};
    color: ${p => p.theme.colors.accentColor};
`;

export const ReviewerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const ReviewerName = styled.span`
    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.xl};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    line-height: ${p => p.theme.lineHeights.details};
    
`;

export const ReviewerRating = styled.div`
    display: flex;
    gap: 4px;
`;  

export const ReviewerСomment = styled.div`
    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights.main};
    color: ${p => p.theme.colors.text};
`;

