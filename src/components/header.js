import 'bootstrap/dist/css/bootstrap.min.css';
import './head.css';
import { Breadcrumb, Col, Container, Row , Image,Nav,Card,Button} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ava1 from "./ava1.jpg"
import ava2 from "./ava2.jpg"

export function Head(){
    const{t, i18n} = useTranslation();

const changeLanguage = (lang) =>{
  i18n.changeLanguage(lang);
}
    return (
        <div>
        <div class="con2">
        <Container >
            <Row style={{marginTop:'10px'}}>
                <Col md='2' xs='2'><a href='https://github.com/Egor543'><Image
                    src={ava2}
                    rounded
                    height='50'
                    width='50'
                /></a>
                <p>{t("name1")}</p>
                </Col>  
                <Col md='2' xs='2'><a href='https://github.com/prxfsk17'><Image
                    src={ava1}
                    rounded
                    height='50'
                    width='50'
                /></a>
                <p>{t("name2")}</p></Col>  
                <Col md='8' xs='9'>
                
                <Nav variant="pills" defaultActiveKey="/home" className='d-flex justify-content-end'>
                    <Nav.Item>
                    <Nav.Link><Link to="/"><Button>{t("main")}</Button></Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link><Link to="/list"><Button>{t("list")}</Button></Link></Nav.Link>
                    </Nav.Item>          
                </Nav>  

                </Col>
            </Row>            
            <div class='test'>
            <p style={{marginLeft: '10px'}}>{t("lang")}</p>
            <div>
                <Button style={{marginRight: '10px'}} onClick={()=>changeLanguage("ru")}>{t("rus")}</Button>
                <Button style={{marginRight: '10px'}} onClick={()=>changeLanguage("en")}>{t("eng")}</Button>
            </div>      
            </div>
        </Container>
        </div>
        </div>
)}