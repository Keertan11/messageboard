# Mini Messageboard

A simple messageboard application built with Node.js, Express, and EJS. This app allows users to view a list of messages, add new messages, and view individual message details.

## Features

- View all messages on the main page.
- Add new messages using a form.
- View details of a single message.
- Simple and easy-to-use interface.

## Tech Stack

- **Backend**: Node.js with Express
- **Frontend**: EJS (Embedded JavaScript)
- **Database**: In-memory array for storing messages (no persistent database, messages are lost when the server restarts)
- **Middleware**: Express's `express.urlencoded()` to parse form data

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Keertan/messageboard.git
