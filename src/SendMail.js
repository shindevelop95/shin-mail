import React from 'react'
import './SendMail.css'
import {Button} from "@material-ui/core"
import {Close} from "@material-ui/icons";
import {useDispatch} from "react-redux"
import {useForm} from "react-hook-form"
import {closeSendMessage} from "./features/mailSlice"
import { db } from './firebase';
import firebase from 'firebase'
function SendMail() {
    const {register,handleSubmit,watch,errors} = useForm(); 
    const dispatch = useDispatch();
    const onSubmit = (formData) =>{
       
        db.collection('emails').add(
            {
                to: formData.to,
                subject:formData.subject,
                message:formData.message,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            }
        )
        dispatch(closeSendMessage())
    }
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close onClick={()=>dispatch( closeSendMessage())}className="sendMail__close"/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='to' type="email" ref={register({required:true})} placeholder="To" type="text"/>
                {errors.to && <p className="sendMail__error">To is Required</p>}
                <input name='subject' ref={register({required:true})} placeholder="Subject" type="text"/>
                {errors.subject && <p className="sendMail__error">To is Required</p>}
                <input name='message' ref={register({required:true})} className="sendMail__message" placeholder="Message..." type="text"/>
                {errors.message && <p className="sendMail__error">To is Required</p>}

                <div className="sendMail__options">
                    <Button type="submit" className="sendMail__send">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
