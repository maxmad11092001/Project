import classNames from "classnames/bind";
import style from './Popper.module.scss';

const cx = classNames.bind(style);

function Wrapper(children) {
    return <div className={cx('Wrapper')}>{children}</div>;
}

export default Wrapper; 