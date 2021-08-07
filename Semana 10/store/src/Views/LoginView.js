import React from 'react'
import { useState,useEffect } from 'react'
import imglogin from '../assets/log.jpg'

export default function LoginView() {
    return (
        <div className="h-100 row">
            <div className="col-sm-12 col-md-6">
                <img src={imglogin} style={{width:'100%',height:'100%',objectFit:'cover'}} alt='imagen login' />
            </div>
            <div className="col-sm-12 col-md-6">
                <h2>Ingresa</h2>
                <button className='btn btn-danger btn-lg'>
                    <i className='fab fa-google me-2'>Ingresa con Google</i>
                </button>
            </div>
        </div>
    )
}
