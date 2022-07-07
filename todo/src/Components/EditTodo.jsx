import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopupGfg() {
    return (
        <div>
            <Popup trigger={<button> click </button>}
                position="right center">
                <input/>
                <button>save</button>
            </Popup>
        </div>
    )
};