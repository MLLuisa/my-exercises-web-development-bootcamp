import {Link} from 'react-router-dom';

const Header = () => {
    return  (<nav>
    <ul>
        <li><Link to='/Overview'>Overview</Link></li>
        <li><Link to='/Repositories'>Repositories</Link></li>
        <li><Link to='/Packages'>Packages</Link></li>
        <li><Link to='/People'>People</Link></li>
        <li><Link to='/Teams'>Teams</Link></li>
        <li><Link to='/Projects'>Projects</Link></li>
        <li><Link to='/Settings'>Settings</Link></li>
    </ul>
        </nav>
        )
}

export default Header;