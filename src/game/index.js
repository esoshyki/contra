import React, { PureComponent } from "react";
import { useRef } from 'react';
import { GameEngine } from "react-game-engine";
import { Box } from "./renderers";
import { MoveBoxRight } from './systems/moveBox';
import  AnimatePlayer  from './systems/animatePlayer'
 
export default function SimpleGame () {

    return (
      <GameEngine
        style={{ width: 1000, height: 800, backgroundColor: "blue", margin: "auto" }}
        systems={[MoveBoxRight, AnimatePlayer]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          box1: { x: 200,  y: 200, backgroundX: -517, backgroundY: -477, renderer: <Box />}
        }}>
 
      </GameEngine>
    );
}