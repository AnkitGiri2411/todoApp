import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { Link } from "react-router-dom";

export default function PopUpLogin() {

    const winnername = "h";

  return (
    <div className={`winner ${winnername !== "" ? "" : "shrink"}`}>
        <h4>User Id </h4>
        <input className="form-control form-control-lg" type="text" />
        <h4>Password</h4>
        <input className="form-control form-control-lg" type="password"/>
        <button >Login </button>
        </div>
  )
}