import React from 'react';
import { IconConditioner, IconCd, IconRadio, IconHob } from 'components/Icons/Icons';
import { FeaturesDescriptionList, FeaturesDetailsContent, WrapDescription } from './FeaturesDescriptionDetails.styled';


const FeaturesDescriptionDetails = ({ advert }) => {
    const details = advert.details;

        return (
            <FeaturesDescriptionList>
                {details.airConditioner &&
                    <FeaturesDetailsContent>
                        <IconConditioner />
                            <WrapDescription>{details.airConditioner} air conditioner</WrapDescription>
                    </FeaturesDetailsContent>
                }
                {details.CD &&
                    <FeaturesDetailsContent>
                        <IconCd />
                        CD
                    </FeaturesDetailsContent>
                }
                {details.radio &&
                    <FeaturesDetailsContent>                                    
                        <IconRadio />
                        Radio
                    </FeaturesDetailsContent>
                }
                {details.hob &&
                    <FeaturesDetailsContent>
                        <IconHob />
                        <WrapDescription>{details.hob} hob</WrapDescription>
                    </FeaturesDetailsContent>
                }
            </FeaturesDescriptionList>
        );
}
    
export default FeaturesDescriptionDetails;