// import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
// import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';


// import { Wrapper as PopperWrapper } from '~/Components/Popper';
import Button from '~/Components/Button';
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <h2>Group10</h2>
            </div>
            <div className={cx('search')}>
                <input placeholder='Search time out' spellCheck={false} />
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={cx("action")}>
                <Button to="/login" target='_blank'>Log In</Button>
            </div>
        </div>
    </header>
}

export default Header;