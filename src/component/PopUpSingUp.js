import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

export default function PopUpSingUp() {

    const winnername = "h";

  return (
    <div className={`winner ${winnername !== "" ? "" : "shrink"}`}>
        <h4>Name </h4>
        <input className="form-control form-control-lg" type="text" />
        <h4>User ID </h4>
        <input className="form-control form-control-lg" type="text" />
        <h4>Password</h4>
        <input className="form-control form-control-lg" type="password"/>
        <button >Sing Up</button>
        </div>
  )
}
