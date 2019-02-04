import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer>
            <div className='footer-outer'>
                <div className='footer-inner'>
                    <div className='footer-title'>Meet the Developers</div>
                    <div className='developer-info'>
                        <div className='developer' >
                            <div className='person-name'>Jerrik Shaw</div>
                            <div className='person-links'>
                                <a className='footer-portfolio' href="https://www.jerrikshaw.com/" target='_blank'><i className="fas fa-briefcase"></i></a>
                                <a className='footer-github' href="https://github.com/jlshaw117" target='_blank' ><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                        <div className='developer' >
                            <div className='person-name'>Joanna Lew</div>
                            <div className='person-links'>
                                <a className='footer-portfolio' href="https://www.joannalew.com/" target='_blank'><i className="fas fa-briefcase"></i></a>
                                <a className='footer-github' href="https://github.com/joannalew" target='_blank' ><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                        <div className='developer' >
                            <div className='person-name'>Dennis Myasnyankin</div>
                            <div className='person-links'>
                                <a className='footer-portfolio' href="https://www.dennismyasnyankin.com/" target='_blank'><i className="fas fa-briefcase"></i></a>
                                <a className='footer-github' href="https://github.com/dmyasnyankin" target='_blank' ><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                        <div className='developer' >
                            <div className='person-name'>Daniel Moon</div>
                            <div className='person-links'>
                                <a className='footer-portfolio' href="" target='_blank'><i className="fas fa-briefcase"></i></a>
                                <a className='footer-github' href="https://github.com/moona3k" target='_blank' ><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;