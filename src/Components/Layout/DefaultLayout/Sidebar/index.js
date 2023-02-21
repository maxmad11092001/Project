import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSignsPost } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <div className={cx('Home')}>
            <FontAwesomeIcon icon={faHouse} className={cx('icon-home')} />
            <p className={cx('Home-Page')}>Home page</p>
        </div>
        <div className={cx('Views')}>

            <FontAwesomeIcon icon={faSignsPost} className={cx('icon-views')} />
            <p className={cx('Views-Page')}>Views</p>

        </div>

    </aside>

}

export default Sidebar;