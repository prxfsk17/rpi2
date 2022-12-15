import 'bootstrap/dist/css/bootstrap.min.css';
import './startpage.css';
import React, { useState } from "react";
import { Breadcrumb, Col, Container, Row , Image,Nav,Card,Button} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Head } from './header';
import { Link } from 'react-router-dom';
import pic1 from "./card1.jpg"
import pic2 from "./card2.jpg"
import pic3 from "./card3.jpg"
import pic4 from "./card4.jpg"
import pic5 from "./card5.jpg"
import info from "./info.json"

let way='';
export function List(){
    const{t, i18n} = useTranslation();

    const changeLanguage = (lang) =>{
      i18n.changeLanguage(lang);
    }

    const [arch] = useState(info);
    const [value, setValue] = useState('');

    const filteredArch= arch.filter(arch =>{
        return arch.name.toLowerCase().includes(value.toLowerCase()) || arch["en-name"].toLowerCase().includes(value.toLowerCase());
    })

    return(
      <div>
      <div class="back"></div>
      <div class='con'>
        <Container>
        <p align='center' style={{marginLeft:'20px'}}><h1>{t("list")}</h1></p>
        <Row>
          <p align='center' style={{marginTop:'7px'}}>
            <input type="text" style={{width:'40%'}} onChange={(event)=>setValue(event.target.value)}></input>
          </p>
        </Row>
        <Row>
        {
          filteredArch.map((arch, index)=>{
              let pic;
              if (arch.name.toLocaleLowerCase().includes("вальмен")){
                  pic=pic1;
              }
              if (arch.name.toLocaleLowerCase().includes("игорь")){
                pic=pic2;
              }
              if (arch.name.toLocaleLowerCase().includes("михаил")){
                pic=pic3;
              }
              if (arch.name.toLocaleLowerCase().includes("владимир")){
                pic=pic4;
              }
              if (arch.name.toLocaleLowerCase().includes("георгий")){
                pic=pic5;
              }
              let tmp=arch["en-name"];
              return (
                <Card style={{ width: '18rem', height : '19em' }}>
                <Card.Img variant="top" src={pic} />
                <Card.Body>
                  <Card.Title>
                  {t(tmp)}
                  </Card.Title>
                  <Link to={arch.path}><Button variant="primary">{t("learn")}</Button></Link>
                </Card.Body>
                </Card>
              )
          })
        }
        </Row>
        </Container>
        </div>
        </div>
    )
}