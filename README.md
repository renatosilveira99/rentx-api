# RentX - API

**RentX** is a backend system designed for managing car rentals. It provides a robust API for car registration, specification management, image uploads, and rental operations.

## API Documentation

### Authentication

- **Type:** Bearer Token (JWT)
- **Scheme:** HTTP
- **Bearer Format:** JWT

## Endpoints

### Categories

#### Create Category
- **Endpoint:** `/categories`
- **Method:** `POST`
- **Description:** Create a new category.
- **Tags:** `Category`
- **Security:** Bearer Token required
- **Request Body:**
  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```
- **Responses:**
  - `201 Created`: Category created successfully.
  - `500 Internal Server Error`: Category already exists.

#### List All Categories
- **Endpoint:** `/categories`
- **Method:** `GET`
- **Description:** List all categories.
- **Tags:** `Category`
- **Responses:**
  - `200 OK`: Returns an array of categories.
  ```json
  [
    {
      "name": "string",
      "description": "string"
    }
  ]
  ```

#### Upload Categories via CSV
- **Endpoint:** `/categories/import`
- **Method:** `POST`
- **Description:** Upload a new category using a CSV file.
- **Tags:** `Category`
- **Security:** Bearer Token required
- **Request Body:**
  ```json
  {
    "file": "binary"
  }
  ```
- **Responses:**
  - `201 Created`: Categories uploaded successfully.

### Specifications

#### Create Specification
- **Endpoint:** `/specifications`
- **Method:** `POST`
- **Description:** Create a new specification for a car.
- **Tags:** `Specifications`
- **Security:** Bearer Token required
- **Request Body:**
  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```
- **Responses:**
  - `201 Created`: Specification created successfully.
  - `500 Internal Server Error`: Specification already exists.

### Sessions

#### Authenticate User
- **Endpoint:** `/sessions`
- **Method:** `POST`
- **Description:** Authenticate a user and obtain a JWT.
- **Tags:** `Session`
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Responses:**
  - `200 OK`: Authentication successful.
  - `400 Bad Request`: Email or password incorrect.

### Cars

#### Create Car
- **Endpoint:** `/cars`
- **Method:** `POST`
- **Description:** Create a new car.
- **Tags:** `Cars`
- **Security:** Bearer Token required
- **Request Body:**
  ```json
  {
    "name": "string",
    "description": "string",
    "daily_rate": "number",
    "license_plate": "string",
    "fine_amount": "number",
    "brand": "string",
    "category_id": "string"
  }
  ```
- **Responses:**
  - `201 Created`: Car created successfully.
  - `400 Bad Request`: Car already exists.

#### Upload Car Images
- **Endpoint:** `/cars/images/{id}`
- **Method:** `POST`
- **Description:** Upload images for a car.
- **Tags:** `Cars`
- **Security:** Bearer Token required
- **Parameters:**
  - `id` (path parameter): Car ID
- **Request Body:**
  ```json
  {
    "images": ["binary"]
  }
  ```
- **Responses:**
  - `201 Created`: Images uploaded successfully.

## Installation and Setup

### Prerequisites

- Node.js (LTS version)
- [nvm](https://github.com/nvm-sh/nvm) for managing Node.js versions

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/rentx-backend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd rentx-backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

4. Configure environment variables. Create a `.env` file at the root of the project and add the necessary environment variables.

### Scripts

- **Development:** 

    ```bash
    npm run dev
    ```

    or

    ```bash
    yarn dev
    ```

- **Build:** 

    ```bash
    npm run build
    ```

    or

    ```bash
    yarn build
    ```

- **Tests:** 

    ```bash
    npm test
    ```

    or

    ```bash
    yarn test
    ```

- **Seed Admin Data:**

    ```bash
    npm run seed:admin
    ```

    or

    ```bash
    yarn seed:admin
    ```

## Technologies Used

- **Node.js:** JavaScript runtime.
- **TypeScript:** Adds static typing to JavaScript.
- **Express:** Web framework for building the API.
- **TypeORM:** ORM for database integration.
- **Multer:** Middleware for handling file uploads.
- **Jest:** Testing framework.
- **Babel:** Compiler for TypeScript transformation.
