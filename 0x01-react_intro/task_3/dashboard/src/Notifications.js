import React from "react";
import './Notifications.css';
import icon from './close-icon.png';
import { getLatestNotification } from "./utils";

function Notifications() {
    const handleClick = () => {
        console.log('Close button has been clicked');
      };
    return (
        <div className="Notifications">
            <button
                style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                }}
                aria-label="Close"
                onClick={handleClick}
            >
                <img src={icon} alt="Close" />
            </button>
            <p><strong>Here is the list of notifications</strong></p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}

export default Notifications;