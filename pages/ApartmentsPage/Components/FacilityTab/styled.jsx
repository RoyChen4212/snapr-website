import styled from 'styled-components';
import { DivColumn, DivRow, H1 as NormalH1, H2 as NormalH2 } from '~components';
import { Media } from '~utils/constants';

export const FacilityWrapper = styled(DivColumn)`
  flex: none;
`;

export const FacilityHeaderWrapper = styled(DivRow)`
  flex: none;
  align-items: flex-end;
  ${Media.tablet`
    flex-wrap: wrap;
    justify-content: center;
  `}
`;

export const FacilityHeader = styled(DivColumn)`
  margin: 25px;
  align-items: center;

  span {
    color: #fff;
    opacity: ${props => props.opacity};
    font-size: 20px;
    font-family: 'proxima_nova_ltsemibold';
    text-align: center;
    -webkit-touch-callout: none;
    user-select: none;
  }

  div {
    opacity: ${props => props.opacity};
  }

  &:focus,
  &:active {
    span {
      opacity: ${props => (props.opacity === 1 ? 1 : 0.6)};
    }
    div {
      opacity: ${props => (props.opacity === 1 ? 1 : 0.6)};
    }
  }

  cursor: pointer;

  ${Media.tablet`
    margin: 10px;
    flex: none;
    width: 40%;
  `}
`;

export const HtmlContent = styled(DivColumn)`
  flex: none;
  margin: 10px 20px 60px 80px;

  li {
    font-family: 'Proxima Nova';
    font-size: 18px;
    line-height: 1em;
    color: white;
  }

  li + li {
    margin-top: 10px;
  }

  span {
    font-family: 'Proxima Nova';
    font-size: 20px;
    line-height: 1em;
  }

  p {
    font-family: 'Proxima Nova';
    font-size: 18px;
    margin: 8px 0;
    line-height: 1.2em;
  }

  a {
    color: white;
    font-family: 'Proxima Nova';
    font-size: 18px;
  }

  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
  }

  strong {
    font-family: 'proxima_nova_ltsemibold';
    font-size: 20px;
    line-height: 1.2em;
  }

  ${Media.phone`
    margin: 10px 25px 60px;
    align-self: center;
  `}
`;

export const Img = styled.img`
  max-width: 700px;
  width: 100%;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const ExpContainer = styled(DivColumn)`
  flex: none;
  margin: 0 20px 20px;
  margin-bottom: 40px;
`;

export const ExpWrapper = styled(DivColumn)`
  flex: none;
  margin: 10px 0 20px 60px;

  ${Media.phone`
    margin: 10px 0 20px;
  `}
`;

export const ExpHeader = styled(NormalH2)`
  font-size: 27px;
  line-height: 1em;
  text-align: center;
  margin: 10px 20px;

  ${Media.phone`
    font-size: 20px;
    margin: 10px 0;
  `}
`;

export const ExpLabel = styled(NormalH1)`
  font-size: 30px;
`;

export const ExpContent = styled(HtmlContent)`
  margin: 10px 0 0 50px;

  a {
    color: white !important;
    font-family: 'Proxima Nova';
    font-size: 18px;

    strong {
      color: inherit;
    }
  }
`;
