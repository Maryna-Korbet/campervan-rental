import styled from 'styled-components';

export const VehicleDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 430px;
    gap: 24px;

    font-family: ${p => p.theme.fonts.main}
`;

export const VehicleDetailsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const VehicleDetailsItem = styled.li`
    display: flex;
    justify-content: space-between;
    font-size: ${p => p.theme.fontSizes.xl};
    font-weight: ${p => p.theme.fontWeights.medium};
    line-height: ${p => p.theme.lineHeights.details};
`;