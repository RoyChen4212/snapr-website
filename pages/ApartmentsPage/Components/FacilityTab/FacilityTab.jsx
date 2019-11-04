import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';
import AppConfig from '~utils/config/config';

const renderContent = facility => {
  if (!facility || !facility.items) {
    return null;
  }

  if (typeof facility.items === 'string' || facility.items instanceof String) {
    return <Styled.HtmlContent dangerouslySetInnerHTML={{ __html: facility.items }} />;
  }

  if (facility.items.src) {
    return <Styled.Img src={facility.items.src} />;
  }

  if (facility.items.events || facility.items.reviews || facility.items.things) {
    const { events, reviews, things } = facility.items;
    return (
      <Styled.ExpContainer>
        <Styled.ExpHeader>
          Staying at The Capital is awesome because we put you in the heart of the action. More than just a bed, enjoy
          the complete experience. Check out what’s on and other enthusiast’s stay snapshots.
        </Styled.ExpHeader>
        {events && (
          <Styled.ExpWrapper>
            <Styled.ExpLabel>Our Events</Styled.ExpLabel>
            <Styled.ExpContent dangerouslySetInnerHTML={{ __html: events }} />
          </Styled.ExpWrapper>
        )}
        {reviews && (
          <Styled.ExpWrapper>
            <Styled.ExpLabel>Travel Reviews</Styled.ExpLabel>
            <Styled.ExpContent dangerouslySetInnerHTML={{ __html: reviews }} />
          </Styled.ExpWrapper>
        )}
        {things && (
          <Styled.ExpWrapper>
            <Styled.ExpLabel>Things To Do</Styled.ExpLabel>
            <Styled.ExpContent dangerouslySetInnerHTML={{ __html: things }} />
          </Styled.ExpWrapper>
        )}
      </Styled.ExpContainer>
    );
  }

  return null;
};

const FacilityTab = props => {
  const keyArys = props.isConference ? AppConfig.ConfServiceArys : AppConfig.FacilityArys;
  return (
    <Styled.FacilityWrapper>
      <Styled.FacilityHeaderWrapper>
        {keyArys.map(facility => {
          let label = facility.label;
          if (facility.key === 'gym' && (!props.facilities.gym || !props.facilities.gym.spa_enabled)) {
            label = 'GYM';
          }

          return (
            (facility.key !== 'conference' || props.facilities[facility.key].items) && (
              <Styled.FacilityHeader
                key={facility.key}
                opacity={facility.key === props.activeFacilityKey ? 1 : 0.26}
                onClick={() => props.onFacilityClick(facility.key)}
              >
                <span>{label}</span>
                <div style={{ alignSelf: 'stretch', backgroundColor: '#fff', height: '5px', marginTop: '10px' }} />
              </Styled.FacilityHeader>
            )
          );
        })}
      </Styled.FacilityHeaderWrapper>

      {renderContent(props.facilities[props.activeFacilityKey])}
    </Styled.FacilityWrapper>
  );
};

FacilityTab.propTypes = {
  facilities: PropTypes.object.isRequired,
  activeFacilityKey: PropTypes.string,
  onFacilityClick: PropTypes.func,
  isConference: PropTypes.bool,
};

export default FacilityTab;
