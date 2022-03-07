import React from "react";
import { ClipLoader } from "react-spinners";
import {useState} from 'react';

export const Spinner = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
  
    return (
      <div className="sweet-loading">
        <ClipLoader color={color} loading={loading} size={60} />
      </div>
    );
};