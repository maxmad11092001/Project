import classNames from "classnames/bind";
import Header from "~/Components/Layout/components/Header";
import styles from './DefaultLayout.scss'
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;