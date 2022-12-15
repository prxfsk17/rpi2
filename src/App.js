import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {StartPage} from './components/startpage'
import {TimeLine} from './components/bio/valmen/timeline'
import { Valmen } from './components/bio/valmen/valmen';
import { Head } from './components/header';
import { List } from './components/list';
import {Belogortsev} from './components/bio/belogortsev/belogortsev';
import { Korol } from './components/bio/korol/korol';
import { Zaborski } from './components/bio/zaborski/zaborski';
import { Baklanov } from './components/bio/baklanov/baklanov';

function App() {

const{t, i18n} = useTranslation();

const changeLanguage = (lang) =>{
  i18n.changeLanguage(lang);
}
  return (
    <Router>
      <Head/>
      <Switch>
        <Route exact path ="/" component = {StartPage}/>
        <Route path="/list" component = {List}/>  
        <Route path="/Valmen" component ={Valmen}/>
        <Route path="/Belogortsev" component ={Belogortsev}/>
        <Route path="/Korol" component ={Korol}/>
        <Route path="/Zaborski" component ={Zaborski}/>
        <Route path="/Baklanov" component ={Baklanov}/>
      </Switch>
    </Router>
    
  );
}

export default App;
