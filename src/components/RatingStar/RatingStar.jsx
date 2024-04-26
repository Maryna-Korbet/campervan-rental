import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';

const RatingStar = styled(StarIcon)`
    width: 16px;
    height: 16px;
    color: ${props => props.theme.colors.rating};
    background-color: transparent;
`;

export default RatingStar;