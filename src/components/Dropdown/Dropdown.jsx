import React from 'react'
import {
    DropdownMenu,
    DropdownContainer,
    DropdownButton
} from './style'

const Dropdown = () => {

    return (
        <DropdownMenu>
            <DropdownContainer>
                <DropdownButton>Profile Settings</DropdownButton>
                <DropdownButton>Payment Settings</DropdownButton>
                <DropdownButton>Security Settings</DropdownButton>
                <DropdownButton>Logout</DropdownButton>
            </DropdownContainer>
        </DropdownMenu>
    )
}

export default Dropdown
