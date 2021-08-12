import React from 'react'
import { useState,useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import socket from 'socket.io-client/lib/socket'

let socket

export default function Chat() {

    const [name,setName] = useState('')
    const [room,setRoom] = useState('')

    const URL = "https://chatsocketsdemo.herokuapp.com/"
    
    useEffect(() => {

        const { name, room } = queryString.parse(window.Location.search)

        socket = io(URL)

        setName(name)
        setRoom(room)

        socket.emit('join',{name,room}, () => {})

    },[window.Location.search])

    useEffect(() =>{
        socket.on("message", (message) => {
            console.log(message)
        })
    },[])

    return (
        <div>
            
        </div>
    )
}
