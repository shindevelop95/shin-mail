import React from 'react'
import './Sidebar.css'
import {Button} from '@material-ui/core'
import { Add, Duo, Person, Phone } from '@material-ui/icons'
import InboxIcon from "@material-ui/icons/Inbox"
import StarIcon from "@material-ui/icons/Star"
import SidebarOption from './SidebarOption'
import {IconButton} from '@material-ui/core'
import {useDispatch} from "react-redux"
import {openSendMessage} from "./features/mailSlice"

function Sidebar() {
    const dispatch = useDispatch()
    return (
        <div className="sidebar">
            <Button 
                className="sidebar__compose"
                onClick={() => dispatch(openSendMessage())}
                startIcon={<Add fontSize="large"/>}
            >Compose</Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected/>
            <SidebarOption Icon={StarIcon} title="Starred" number={7}/>

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton><Person/></IconButton>
                    <IconButton><Duo/></IconButton>
                    <IconButton><Phone/></IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
