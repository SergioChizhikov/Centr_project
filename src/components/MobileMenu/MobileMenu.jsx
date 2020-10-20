import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {NavLink} from "react-router-dom";




    export default function MobileMenu  () {
        const [dropdownOpen, setDropdownOpen] = useState(false);

        const toggle = () => setDropdownOpen(prevState => !prevState);
        return (
            <>
            <div className='mt-30'></div>
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
                <DropdownMenu right style={{textDecoration: "none", background:'#056c5f'}}>
                    <DropdownItem header>Меню</DropdownItem>
                    <DropdownItem><NavLink exact to=''>Главная</NavLink></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Кто мы</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Наши услуги</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Статьи</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Контакты</DropdownItem>
                </DropdownMenu>
            </Dropdown>
                </>
        );
    }