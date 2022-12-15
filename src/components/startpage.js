import 'bootstrap/dist/css/bootstrap.min.css';
import './startpage.css';
import { Breadcrumb, Col, Container, Row , Image,Nav,Card,Button} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Head } from './header';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import pic1 from "./card1.jpg"
import pic2 from "./card2.jpg"
import pic3 from "./card3.jpg"
import pic4 from "./card4.jpg"
import pic5 from "./card5.jpg"

export function StartPage(){
const{t, i18n} = useTranslation();

const changeLanguage = (lang) =>{
  i18n.changeLanguage(lang);
}
  return (
    <div>
    <div class="back"></div>
    <div class='con'>
    <Container >
        <p align='centet' style={{margin : '7px'}}>{t("info")}</p>
        <Row> 
        <p align='center'><b><h2>{t("day")}</h2></b></p>
        <img
          class='photo'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2eD_TlYpjC6X0vpXSPceRjRhs9LCimdK0sg&usqp=CAU"
        ></img>
        <p align='center'><h3>{t("Valmen-Aladov")}</h3></p>
      </Row>
      <p align='center'>{t("val-info")}<Link to="/Valmen"><em>{t("learn")}</em></Link></p>
      <p align='center' className='my-3'><h3>{t("look")}</h3></p>
      <Row className='my-3' style={{display : 'flex', justifyContent : 'space-evenly'}}>
      
        <Card style={{ width: '18rem', height : '19em' }}>
        <Card.Img variant="top" src={pic1} />
        <Card.Body>
          <Card.Title>
          {t("val-name")}
          </Card.Title>
          <Link to="/Valmen"><Button variant="primary">{t("learn")}</Button></Link>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem', height : '19em' }}>
        <Card.Img variant="top" src={pic2} />
        <Card.Body>
          <Card.Title>
          {t("belogor-name")}
          </Card.Title>
          <Link to="/Belogortsev"><Button variant="primary">{t("learn")}</Button></Link>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem', height : '19em' }}>
        <Card.Img variant="top" src={pic3} />
        <Card.Body>
          <Card.Title>
          {t("zaborski-name")}
          </Card.Title>
          <Link to="/Zaborski"><Button variant="primary">{t("learn")}</Button></Link>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem', height : '19em' }}>
        <Card.Img variant="top" src={pic4} />
        <Card.Body>
          <Card.Title>
          {t("korol-name")}
          </Card.Title>
          <Link to="/Korol"><Button variant="primary">{t("learn")}</Button></Link>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem', height : '19em' }}>
        <Card.Img variant="top" src={pic5} />
        <Card.Body>
          <Card.Title>
          {t("baklanov-name")}
          </Card.Title>
          <Link to="/Baklanov"><Button variant="primary">{t("learn")}</Button></Link>
        </Card.Body>
        </Card>
      
      
      </Row>  
      </Container>
      </div>
      </div>
  );
}