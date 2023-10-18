import React from 'react';
import { SpinePlayer } from '@esotericsoftware/spine-player';
    
const Character = () => {

    var jsonUrl = '../assets/Box_1.json';
    var atlasUrl = '../assets/Box_1.atlas.txt';
    
    new SpinePlayer('player-container', {
        jsonUrl: jsonUrl,
        atlasUrl: atlasUrl,
        animation: 'open(green)',
        premultipliedAlpha: true,
        backgroundColor: '#cccccc',
        viewport: {
            debugRender: true,
        },
        showControls: true,
    });

    return <div id="player-container"></div>;
};

export default Character;