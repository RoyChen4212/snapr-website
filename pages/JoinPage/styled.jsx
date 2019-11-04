import styled from 'styled-components';
import { H1 as NormalH1, H2 as NormalH2, H6 as NormalH6, DivColumn, DivRow, Button, ButtonLabel } from '~components';
import { Media } from '~utils/constants';

export const ContentContainer = styled(DivColumn)`
  flex: none;
  margin-top: 300px;

  ${Media.phone`
    margin-top: 150px;
  `}
`;

// region Content
export const ContentWrapper = styled(DivRow)`
  flex: none;
  align-self: center;
  margin: 0 20px;

  ${Media.phone`
    flex-direction: column;
    margin: 0 15px;
  `}
`;

export const Img = styled.div`
  width: 400px;
  background-size: contain;
  background-image: url(${props => props.src});
  background-position: center;

  ${Media.phone`
    align-self: center;
    width: 300px;
    height: 150px;
  `}
`;

export const JoinWrapper = styled(DivColumn)`
  flex: none;
  margin-left: 100px;

  ${Media.phone`
    margin-left: 0;
    margin-top: 30px;
    align-items: center;
  `}
`;

export const JoinTitle = styled(NormalH1)`
  ${Media.phone`
    text-align: center;
  `}
`;

export const JoinDescription = styled(NormalH2)`
  font-size: 27px;
  letter-spacing: 1.5px;

  ${Media.phone`
    text-align: center;
  `}
`;

export const JoinButton = styled(Button)`
  margin-top: 30px;
  background-color: white;
  align-self: flex-start;

  ${Media.phone`
    align-self: center;
  `}
`;

export const JoinButtonLabel = styled(ButtonLabel)`
  padding: 20px;
  color: #0d0d0d;
  font-size: 20px;
`;
// endregion

// region Description
export const DescriptionWrapper = styled(DivColumn)`
  flex: none;
  margin: 200px 20px 0 100px;

  ${Media.phone`
    margin: 100px 15px 15px;
  `}
`;

export const DescTitle = styled(NormalH1)`
  font-size: 38px;
  letter-spacing: 1.5px;
`;

export const LongDescription = styled(NormalH6)`
  margin-top: 13px;
  font-size: 20px;
  letter-spacing: 1.5px;

  p {
    margin: 0;
    line-height: 28px;
  }

  strong {
    font-family: 'proxima_nova_ltsemibold';
    font-size: 20px;
  }
`;

// endregion
