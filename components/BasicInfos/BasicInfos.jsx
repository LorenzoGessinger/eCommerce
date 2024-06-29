import { Facebook, Instagram, KeyboardArrowDown, Language, LinkedIn, Login, Message, Phone, Twitter } from '@mui/icons-material'
import './basicinfos.modules.css'
import { Link } from 'react-router-dom'

const BasicInfos = ({ email, phone, language, login }) => {


    return (
        <header id='header'>
            <div className='wrapper'>
                <div className='wrap-email'>
                    <div className='basic-email'>
                        <Message fontSize='small' />
                        <span>{email}</span>
                    </div>
                </div>

                <div className='wrap-phone'>
                    <div className='basic-phone'>
                        <Phone fontSize='small' />
                        <span>{phone}</span>
                    </div>
                </div>

                <div className='social-media-icons'>
                    <div>
                        <Facebook fontSize='medium' />
                    </div>
                    <div>
                        <Twitter fontSize='medium' />
                    </div>
                    <div>
                        <Link
                            tyle={{ textDecoration: "none", color: "rgb(0, 0, 0)" }}
                            to='https://www.instagram.com/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <Instagram
                                style={{ color: "black" }}
                                fontSize='medium' />
                        </Link>
                    </div>
                    <div>
                        <LinkedIn fontSize='medium' />
                    </div>
                </div>

                <div className='wrap-language'>
                    <div className='basic-language'>
                        <Language fontSize='small' />
                        <span>{language}</span>
                        <KeyboardArrowDown fontSize='small' />
                    </div>
                </div>

                <div className='wrap-login'>
                    <div className='basic-login'>
                        <Login />
                        <Link to={`/login/`} style={{ textDecoration: "none", color: "rgb(0, 0, 0)" }}><span>{login}</span></Link>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default BasicInfos