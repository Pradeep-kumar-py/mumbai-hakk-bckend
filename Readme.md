# Bed Story Rec Backend

This repository contains the backend for the Bed Story Recommendation website.

## Features

- RESTful API for story recommendations
- User authentication and management
- Database integration
- Admin panel for managing stories

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Getting Started

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/Bed-story-Rec-backend.git
    cd Bed-story-Rec-backend
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Configure environment variables**
    - Copy `.env.example` to `.env` and update the values.

4. **Run the server**
    ```bash
    npm start
    ```

## API Endpoints

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| GET    | `/stories`       | Get recommended stories    |
| POST   | `/login`         | User login                 |
| POST   | `/register`      | User registration          |
| POST   | `/stories`       | Add a new story (admin)    |

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

This project is licensed under the MIT License.