import React, { useState } from 'react';
import _ from 'lodash';
import './../App.css';
import styled from 'styled-components';


let rotate = 60;
function MouseEvents(props) {

    const [rot, setRot] = useState(rotate);

    const onWheelFunction = (e)=>{
        e.nativeEvent.wheelDelta > 0 ? rotate = rot+1: rotate = rot-1;
        setRot(rotate);
    }

    const mouseDownHandler = ( event ) => {
        if( event.button === 1 ) {
            console.log('clicked');
            console.log(event.screeenX);
          // do something on middle mouse button click
        }
      }

    return (
        <div onWheel={onWheelFunction} onMouseDown={mouseDownHandler}>
            <Grid rotate={rot}>
                {props.children}
            </Grid>
        </div>
    );
}


export default MouseEvents;


export const Grid = styled.div`
  background-color: #49b293;
  width: 1000px;
  height: 1000px;
  margin: 100px auto 0 auto;
  transform: rotateX(${props => props.rotate}deg) rotateY(0deg) rotateZ(-45deg);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
`;
