import { DeleteSweep, Email, MarkunreadMailbox } from '@material-ui/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import ComposeMail from './ComposeMail';
import './mail.css';
import SentMails from './SentMails';
import TrashMails from './TrashMails';

const Mail = () => {
    return (
        <Router>
            <div className="mailContainer">
                <div className="sidebar bg-light">
                    <div className="sidebarMenu">
                        <h3 className="siebarTitle">
                            Mail Box
                        </h3>
                        <ul className='sidebarList'>
                            <li className='sidebarListItem'>
                                <Email /> <Link to="/mail/composemail">Compose </Link>
                            </li>
                            <li className='sidebarListItem'>
                                <MarkunreadMailbox /> <Link to="/mail/sentmails">Sent </Link>
                            </li>
                            <li className='sidebarListItem'>
                                <DeleteSweep /> <Link to="/mail/trashmails">Trash </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mailBody bg-light mx-3">
                    <Switch>
                        <Route exact path="/mail/composemail">
                            <ComposeMail />
                        </Route>
                        <Route exact path="/mail/sentmails">
                            <SentMails />
                        </Route>
                        <Route exact path="/mail/trashmails">
                            <TrashMails />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Mail