import React from 'react'
import './SendMail.css'
import {Button} from "@material-ui/core"
import {Close} from "@material-ui/icons";
function SendMail() {
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close className="sendMail__close"/>
            </div>

            <form>
                <input placeholder="To" type="text"/>
                <input placeholder="Subject" type="text"/>
                <input className="sendMail__message" placeholder="Message..." type="text"/>

                <div className="sendMail__options">
                    <Button className="sendMail__send">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
