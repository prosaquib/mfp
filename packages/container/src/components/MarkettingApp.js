import React from "react";
import { useRef, useEffect } from "react";
import { mount } from 'marketting/MarkettingApp';



export default () => {
    const divRef = useRef(null);

    useEffect(() => {
        mount(divRef.current);
    });
    
    return (<div ref={divRef} />)
}