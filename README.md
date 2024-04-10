# Bookmyshow

A movie booking application developed using the MERN stack.

## Backend

- **Node + Express + MongoDB**: Backend technologies used for server-side logic and database management.
- **Other Packages**: 
  - `otp-generator`: Used for generating OTPs (One Time Passwords) for authentication.
  - `jwt`: JSON Web Tokens for secure authentication.
  - `express-validator`: Middleware for validating request data.

## Frontend

- **React**: Frontend library used for building user interfaces.
- **Redux Toolkit**: State management library used for managing the state of the movie name.

## Data Models

### Booking

| Field      | Type (Data Type) | Description           |
|------------|-------------------|-----------------------|
| _id        | String (PK)       | Unique identifier     |
| movie      | String            | Name of the movie     |
| movieTime  | String            | Time of the movie     |
| theatre    | String            | Name of the theatre   |

### Seat

| Field  | Type (Data Type) | Description             |
|--------|-------------------|-------------------------|
| _id    | Number (PK)       | Unique identifier       |
| A1     | Number            | Seat A1 availability   |
| A2     | Number            | Seat A2 availability   |
| A3     | Number            | Seat A3 availability   |

## API References

### Booking

- **Book a Movie**
  - Endpoint: `${BASE_URI}/api/booking`
  - Method: POST
  - Description: Book a movie by sending the necessary details in the request body.

- **Get Previous Bookings**
  - Endpoint: `${BASE_URI}/api/booking`
  - Method: GET
  - Description: Retrieve previous bookings made by the user.

### Authentication

- **Generate OTP**
  - Endpoint: `${BASE_URI}/api/otp`
  - Method: POST
  - Description: Generate OTP for user authentication.

- **Signup**
  - Endpoint: `${BASE_URI}/api/signup`
  - Method: POST
  - Description: Register a new user.

- **Login**
  - Endpoint: `${BASE_URI}/api/login`
  - Method: POST
  - Description: Authenticate user credentials and generate JWT token.

