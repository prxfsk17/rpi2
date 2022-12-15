import React from "react";
import '../../startpage.css'
import { Container,Col,Row } from "react-bootstrap";
import { Head } from "../../header";
import { Slider } from "./Slider";
import { TimeLine } from "./timeline";
import { useTranslation } from 'react-i18next';

export function Belogortsev(){
    const{t, i18n} = useTranslation();

    const changeLanguage = (lang) =>{
      i18n.changeLanguage(lang);
    }   
    return(
        <div>
        <div class="back"></div>
        <div class='con'>
        <Container >
            <p align='center'><h1 style={{margin : '5 px'}}>{t("belogor-name")}</h1></p>
            <Row style={{margin:'20px'}}>
                <Col md='4'>
                    <p align='center'><Slider/></p>
                    <p>{t("belogor-info")}
                    </p>
                </Col>
                <Col md='8'>
                    <TimeLine/>
                </Col>
            </Row>
            <Row style={{margin:'20px'}}>
                <Col md='6'>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa5547aac031e3f17b46650f7cd92ad47d34074369b884337de108f6f5407e565&amp;source=constructor" style={{width:'100%' ,height:'400px'}} frameborder="0"></iframe>
                </Col>
                <Col md='6'>
                <iframe style={{width:'100%' ,height:'400px'}} src="https://www.youtube.com/embed/STowSSuyb70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>            
        </Container>
        </div>
        </div>
         
    )
}