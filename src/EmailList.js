import { IconButton,Checkbox } from '@material-ui/core'
import { People, LocalOffer, ArrowDropDown,KeyboardHide, ChevronLeft, ChevronRight, MoreVert, Redo, Settings,Inbox } from '@material-ui/icons'
import React,{useState,useEffect} from 'react'
import Section from './Section'
import './EmailList.css'
import EmailRow from './EmailRow'
import { db } from './firebase'

function EmailList() {
    const [emails,setEmails] = useState([]);

    useEffect(() => {
        db.collection("emails")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot) =>
            setEmails(
                snapshot.docs.map((doc) => ({
                    id:doc.id,
                    data:doc.data(),
                }))
            )
        )
    }, [])
    console.log("Check Data>>",emails)
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingLeft">
                    <Checkbox/>
                    <IconButton><ArrowDropDown/></IconButton>
                    <IconButton><Redo/></IconButton>
                    <IconButton><MoreVert/></IconButton>
                </div>
                <div className="emailList__settingRight">
                    <IconButton><ChevronLeft/></IconButton>
                    <IconButton><ChevronRight/></IconButton>
                    <IconButton><KeyboardHide/></IconButton>
                    <IconButton><Settings/></IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={Inbox} title="primary" color="red" selected />
                <Section Icon={People} title="social" color="#1A73E8" />
                <Section Icon={LocalOffer} title="promotion" color="green" />
            </div>

            <div className="emailList__list">
                {emails.map(email=> (
                    <EmailRow
                        title={email.data.to}
                        id={email.data.id}
                        subject={email.data.subject}
                        description={email.data.message}
                        time={new Date(email.data.timestamp?.seconds*100).toUTCString()}

                    />
                ))}
                <EmailRow
                    title="Twitch"
                    subject="Hey fellow streamer"
                    description="This is a test, I really need to prepare for hackathon"
                    time="10pm"
                />
                <EmailRow
                    title="Twitch"
                    subject="Hey fellow streamer"
                    description="This is a test"
                    time="10pm"
                />
            </div>

        </div>
    )
}

export default EmailList
