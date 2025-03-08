# Blog Project

A simple blog application built using **Node.js**, **Express.js**, **PostgreSQL**, and **EJS**.

## Features
- Create, edit, and delete blog posts
- View a list of all posts
- Store posts in a PostgreSQL database
- Render posts dynamically using EJS

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/blog-project.git
cd blog-project
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up the database
- Ensure you have **PostgreSQL** installed and running.
- Create a database named `blog_db`.
- Run the SQL schema file to create the required tables.

### 4. Configure database credentials
Ensure that you replace these database credentials with your own in the db.js file.
```
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=blog_db
DB_PORT=5432
```

### 5. Start the server
```bash
npm start
```
The application should now be running at **http://localhost:3000/**.

## Project Structure
```
blog-project/
│-- views/        # EJS templates
│-- public/       # Static files (CSS)
│-- db.js         # Database connection
│-- app.js        # Main application file
│-- package.json  # Dependencies and scripts
│-- README.md     # Documentation
```

## API Routes
| Method | Endpoint       | Description             |
|--------|---------------|-------------------------|
| GET    | `/`           | View all blog posts     |
| POST   | `/compose`    | Create a new post       |
| GET    | `/edit/:id`   | Edit a blog post        |
| POST   | `/delete/:id` | Delete a blog post      |

## Contributing
Feel free to fork this repository and submit pull requests for new features or bug fixes.

## License
This project is licensed under the MIT License.

