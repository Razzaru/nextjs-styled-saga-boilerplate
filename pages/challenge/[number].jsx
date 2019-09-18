import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faPhotoVideo} from "@fortawesome/free-solid-svg-icons";
import Router from 'next/router';
import React, {useState} from 'react';
import styled from "styled-components";

import InsideChallengeLayout from "../../components/layouts/inside-challenge-layout/InsideChallengeLayout";
import Tag from "../../components/tags/Tag";
import ProfileTooltipMini from "../../components/blocks/profile-block/ProfileTooltipMini";
import Button from "../../components/buttons/AcceptChallengeButton";

const ChallengeDetails = () => {
    const [isProfileToggle, toggleProfile] = useState(false);
    return (
        <InsideChallengeLayout
            leftSideContent={
                <Content>
                    <Title>
                        <BackIcon/>
                        Начать ходить в бассейн по выходным,
                        купить абонемент
                    </Title>
                    <Tag
                        title="Эпическое испытание"
                        type="epic"
                    />
                    <Label>
                        Один месяц, раз в неделю
                    </Label>
                    <Text>
                        <p>
                            Вам нужно найти ближайший бассейн и получить в нём абонемент.
                        </p>
                        <p>
                            Каждую неделю по выходным посещайте бассейн и делайте подтверждающую фотографию.
                        </p>
                        <p>
                            Через месяц необходимо предоставить четыре фотографии.
                        </p>
                        <p>
                            Желаю удачи : )
                        </p>
                    </Text>
                    <Conditions>
                        <Conditions.Title>
                            Условия подтверждения:
                        </Conditions.Title>
                        <Conditions.Label>
                            Четыре фотографии из бассейна.
                        </Conditions.Label>
                        <ButtonBlock>
                            <Button/>
                            <ButtonLabel>Уже участвуют: 239</ButtonLabel>
                        </ButtonBlock>
                    </Conditions>
                    <Footer>
                        Для этого испытания включено фотоподтверждение, не беритесь за него, если у вас нет возможности
                        сфотографировать результат.
                        <StyledPhotoVideoIcon/>
                    </Footer>
                    <ReportButton>
                        Пожаловаться на испытание
                    </ReportButton>
                </Content>
            }
            rightSideContent={
                <React.Fragment>
                    <Author>
                        <Author.Label>Автор:&nbsp;&nbsp;&nbsp;</Author.Label>
                        <Author.Name
                            onClick={() => toggleProfile(!isProfileToggle)}>Nagbator666</Author.Name>
                    </Author>
                    <ProfileTooltipMini
                        isProfileToggle={isProfileToggle}
                    />
                </React.Fragment>
            }
        />
    )
};

const Content = styled.div`
      padding: 50px;
      padding-top: 0px;
      position: relative;
      height: 100%;
`;

const Title = styled.h1`
        font-weight: bold;
        font-size: 36px;
        color: #333333;
        width: 80%;
        position: relative;
        margin-top: 0;
        margin-bottom: 10px;
`;

const Icon = ({className}) => <FontAwesomeIcon
    className={className}
    icon={faArrowLeft}
    onClick={() => Router.back()}
/>;

const BackIcon = styled(Icon)`
          position: absolute;
          left: -45px;
          top: 7px;
          font-size: 30px;
          cursor: pointer;
`;

const Label = styled.span`
        font-size: 18px;
        color: #828282;
        margin-left: 10px;
`;

const Text = styled.div`
        font-size: 18px;
        color: #4F4F4F;
        width: 60%;
        margin-top: 40px;
`;

const Conditions = styled.div`
        display: flex;
        flex-direction: column;
        width: 50%;
        padding-bottom: 50px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        position: relative;
`;

Conditions.Title = styled.h3`
          font-weight: bold;
          font-size: 24px;
          color: #4F4F4F;
          margin-bottom: 5px;
`;

Conditions.Label = styled.span`
          font-size: 18px;
          color: #828282;
`;

const ButtonBlock = styled.div`
          position: absolute;
          right: -80%;
          top: 50%;
          display: flex;
          flex-direction: column;
`;

const ButtonLabel = styled.span`
            font-size: 18px;
            color: #828282;
            margin-left: 10px;
            margin-top: -10px;
`;

const Footer = styled.div`
        font-size: 14px;
        color: #828282;
        width: 28%;
        margin-top: 10px;
        position: relative;
`;

const PhotoVideoIcon = () => <FontAwesomeIcon
    className="inside-left-side-content-footer-photo-icon"
    icon={faPhotoVideo}
/>;

const StyledPhotoVideoIcon = styled(PhotoVideoIcon)`
          position: absolute;
          left: -50px;
          top: 5px;
          font-size: 30px;
`;

const ReportButton = styled.div`
        position: absolute;
        bottom: 0;
        font-size: 18px;
        text-decoration: underline;
        color: #828282;
        opacity: 0.75;
        cursor: pointer;
`;

const Author = styled.div`
      margin-top: 40%;
      font-family: Roboto, sans-serif;
      font-size: 18px;
      position: relative;
`;

Author.Label = styled.span`
        opacity: 0.75;
        color: #BDBDBD;
`;

Author.Name = styled.span`
        text-decoration: underline;
        color: #828282;
        cursor: pointer;
`;

export default ChallengeDetails;