import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useTranslation } from "react-i18next";
import { connect } from 'react-redux';
import { State, Language } from '../global';
import store from '../redux/store';
import { setLang } from '../redux/slices/Language';


const AppBar = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    height: 2.5rem;
    position: relative;
`;

const Title = styled.div`
    position: absolute;
    padding: 1rem;
    margin-left: 15%;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.50);
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`;

const IconsPanel = styled.div`
    position: absolute;
    margin-left: 75%;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`;

const LanguagePanel = styled.div`
    position: absolute;
    margin-left: 90%;
    top: 50%;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`;

const Corner = styled.button<{ selected : boolean, side : string }>`
    width: 2rem;
    height: 2rem;
    padding: 1px;
    border-radius: ${props => (props.side === 'right') ? '0% 10% 10% 0%' : '10% 0% 0% 10%;'}; 
    color: ${props => (props.selected) ? '#ffffff' : '#000000'};
    background: ${props => (props.selected) ? '#C4794F' : '#ffffff'};
    border: 2px solid #C4794F;
`;



function Header(props : Language) {

    const changeLanguage = (lang : string) => store.dispatch(setLang(lang));
    const { t } = useTranslation();
    let lang = props.value;

    return (
        <AppBar>
            <Title> {t("title")} </Title>
            <IconsPanel>
                <FacebookIcon />
                <InstagramIcon style={{marginLeft: "0.5rem"}}/>
            </IconsPanel>
            <LanguagePanel>
                <Corner selected={lang === 'sk'} side={'left'} onClick={() => changeLanguage('sk')}>     
                    SK
                </Corner>
                <Corner selected={lang === 'en'} side={'right'} onClick={() => changeLanguage('en')}>     
                    EN
                </Corner>
            </LanguagePanel>
        </AppBar>
    );
}

function mapStateToProps (state : State) {
    return { 
        value : state.lang.value
    }
}

export default connect(mapStateToProps)(Header)