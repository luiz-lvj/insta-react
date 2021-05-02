import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import MobileBottom from './components/mobileBottom';
import InstaBody from './components/instaBody';

function App(){
    return(
        <div>
            <Navbar/>
            <InstaBody/>
            <MobileBottom/>
        </div>
    );
}

const app = App();

ReactDOM.render(app, document.querySelector(".root"));