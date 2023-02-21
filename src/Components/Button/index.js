import classNames from "classnames/bind";
import styles from './Button.module.scss';
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Button({ to, href, children, onclick, ...passProps }) {
    let Comp = 'button';

    const props = {
        onclick,
        ...passProps
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper');
    return (
        <Comp classNames={classes} {...props} >
            <span>
                {children}
            </span>
        </Comp>);
}

export default Button;