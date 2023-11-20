
import React, { useState } from 'react';
import { ethers } from 'ethers';
import './AddMessage.css';

const AddMessage = ({ state }) => {
  const [showNotification, setShowNotification] = useState(false);

  const addMessage = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector('#name').value;
    const content = document.querySelector('#message').value;
    const transaction = await contract.addMessage(content, name);
    await transaction.wait();

    // Show the notification after successful form submission
    setShowNotification(true);

    // Hide the notification after a certain duration (optional)
    setTimeout(() => {
      setShowNotification(false);
    }, 10000); // Adjust the duration as needed (3000ms = 3 seconds)
  };

  return (
    <div className="center">
      <h1>Sending Messages</h1>
      <form onSubmit={addMessage}>
        <div>
          <p>Message</p>
          <input type="text" required="required" id="message" />
        </div>

        <div>
          <p>Sender</p>
          <input type="text" required="required" id="name" />
        </div>

        <div>
          <button>Send</button>
        </div>
      </form>

      {showNotification && (
        <div className="noti">
          <h1>Message has been sent</h1>
        </div>
      )}
    </div>
  );
};

export default AddMessage;
