import { useState } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Header = ({ auth }) => {
    const [currUser, SetCurrUser] = useState([{
        profilePic: 'https://avatars.githubusercontent.com/u/48760865?v=4'
    }])

    const showNavLinks = () => auth.uid ? <SignedInLinks /> : <SignedOutLinks />

    return (
            <Navbar style={{background:'rgba(0, 0, 0, 0.5)', borderBottom: '1px solid white'}} variant='dark' expand='lg' className='sticky-top' collapseOnSelect>
                <Container fluid>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Confession</Navbar.Brand>
                    </LinkContainer>
                    {showNavLinks()}
                </Container>
            </Navbar>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Header)
