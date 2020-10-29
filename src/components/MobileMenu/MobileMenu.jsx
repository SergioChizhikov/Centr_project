import React, {useState} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';


export default function MobileMenu() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle
                tag="span"
                data-toggle="dropdown"
                aria-expanded={dropdownOpen}
            >
                <div className='header-bar d-lg-none'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </DropdownToggle>
            <DropdownMenu  right style = {{background: '#056c5f'}}>
                <DropdownItem header>Меню</DropdownItem>
                <DropdownItem color black><NavLink exact to='' style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: '#f8a683', textDecoration: 'none'}}>Главная</NavLink></DropdownItem>
                <DropdownItem divider/>
                <DropdownItem><NavLink to='about' style={{color: 'white', textDecoration: 'none', }} activeStyle={{color: '#f8a683', textDecoration: 'none'}}>Кто мы</NavLink></DropdownItem>
                <DropdownItem divider/>
                <DropdownItem><NavLink to='services' style={{color: 'white', textDecoration: 'none', }} activeStyle={{color: '#f8a683', textDecoration: 'none'}}>Наши услуги</NavLink></DropdownItem>
                <DropdownItem divider/>
                <DropdownItem><NavLink to='blog' style={{color: 'white', textDecoration: 'none', }} activeStyle={{color: '#f8a683', textDecoration: 'none'}}>Статьи</NavLink></DropdownItem>
                <DropdownItem divider/>
                <DropdownItem><NavLink to='contact' style={{color: 'white', textDecoration: 'none', }} activeStyle={{color: '#f8a683', textDecoration: 'none'}}>Контакты</NavLink></DropdownItem>
            </DropdownMenu>
            </Dropdown>

</>
)
    ;
}