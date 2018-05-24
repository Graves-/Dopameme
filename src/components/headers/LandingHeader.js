import React from 'react';
import { Container, Image, Menu, Button } from 'semantic-ui-react';
import logo from  '../../logo-blanco.png';
import FaFire from 'react-icons/lib/fa/fire';
import FaHashtag from 'react-icons/lib/fa/hashtag';
import FaAsterisk from 'react-icons/lib/fa/asterisk';
import FaSearch from 'react-icons/lib/fa/search';


const FixedMenuLayout = () => (
    <Menu fixed='top' size='large' stackable borderless style={Styles.menu}>
        <Container>
            <Menu.Item>
                <Image src={logo} />
            </Menu.Item>

            <Menu.Item as='a' style={Styles.menuItemA}>
                <FaFire /> Hot
            </Menu.Item>
            <Menu.Item as='a' style={Styles.menuItemA}>
                <FaHashtag /> Trending
            </Menu.Item>
            <Menu.Item as='a' style={Styles.menuItemA}>
                <FaAsterisk /> New
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item as='a' style={Styles.menuItemA}>
                    <FaSearch />
                </Menu.Item>
                <Menu.Item as='a' style={Styles.menuItemA}>
                    Login
                </Menu.Item>
                <Menu.Item>
                    <Button style={Styles.menuItemButton} onClick={() => {console.log('hi')}}>Sign Up</Button>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
);

const Styles = {
    menu: {
        backgroundColor: '#1588F4',
        color: '#fff'
    },
    menuItemA: {
        display: 'flex',
        color: '#fff',
        justifyCotnent: 'flex-start'
    },
    menuItemButton: {
        flex: 1,
        backgroundColor: '#182370',
        color: '#fff',
        justifyCotnent: 'center'
    }
};
export default FixedMenuLayout;