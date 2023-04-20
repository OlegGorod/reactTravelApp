import {Fragment} from 'react'
import {ReactComponent as Heart} from './heart.svg'

import './footer.css'

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <span className="footer__text">
                    from
                    <a className="footer__link" href="https://binary-studio.com">
                        binary studio
                    </a>
                    with
                    <Heart className="footer__icon" />
                </span>
            </footer>
        </Fragment>
    )
}

export default Footer