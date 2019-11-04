import styled from 'styled-components';
import { H1 as NormalH1, H2 as NormalH2, H6 as NormalH6, DivColumn, DivRow, Button } from '~components';
import { Media } from '~utils/constants';

export const ContentWrapper = styled(DivColumn)`
  flex: none;
  margin: 200px 100px 0;

  ${Media.phone`
    margin: 200px 10px 0;
  `}
`;

export const H1 = styled(NormalH1)`
  font-size: 53px;
`;

export const H2 = styled(NormalH2)``;

export const LongDescription = styled(NormalH6)`
  margin-top: 70px;
  line-height: 1.5em;
  font-size: 19px;
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

export const BookLabel = styled(Button)`
  align-self: flex-start;
  background-color: #fff;
  padding: 17px;

  label {
    font-size: 20px;
    color: #000;
  }

  ${Media.phone`
    margin: 30px 0 0;
  `}
`;

export const NewsContainer = styled(DivRow)`
  flex: none;
  margin-top: 150px;

  ${Media.phone`
    flex-direction: column;
  `}
`;

export const NewsTitleContainer = styled(DivColumn)`
  flex: none;
  margin-right: 20px;
`;

export const ImageContainer = styled(DivRow)`
  flex: none;
  flex-wrap: wrap;
  margin-top: 40px;

  ${Media.phone`
    flex-direction: column;
  `}
`;

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33.3333333% - 30px);
  margin: 30px 0;
  padding: 2px;

  ${Media.phone`
    width: 100%;
  `}

  &:nth-child(3n + 2) {
    margin: 30px 45px;

    ${Media.phone`
      margin: 30px 0;
    `}
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const ImgWrapper = styled(DivColumn)`
  flex: none;
  justify-content: center;
`;

export const ReadButton = styled(Button)`
  align-self: flex-start;
  background-color: #fff;
  margin-top: 20px;
  padding: 9px 11px;

  label {
    font-size: 20px;
    color: #000;
  }
`;

export const NewsTitle = styled(NormalH1)`
  margin-top: 30px;
  font-size: 35px;
  word-break: break-word;
`;

export const NewsCaption = styled(NormalH6)`
  margin-top: 5px;
  font-size: 25px;
`;
