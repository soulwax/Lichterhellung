# Lichtblick / CODEIA

**Lichtblick** is the official Discord bot for [lichtblick](https://discord.gg/Wv2Ns39ZRA). It is designed to assist users on the Discord server with various tasks and functionalities.

## Features

- **Database Management**: The bot has capabilities to backup and restore the database within a Docker environment.
- **Role Management**: Provides role templates for easy role assignments.
- **Code Execution**: (Assumed based on the project name and context) The bot might have capabilities to execute or evaluate code snippets.

## Setup and Installation

1. **Clone the Repository**:

   ```bash
   git clone https://bitbucket.org/bluesix/Lichtblick.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd Lichtblick
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Setup Environment Variables**: Copy the `.env.example` file to `.env` and fill in the necessary details.

5. **Docker Setup**:
   - Build the Docker image:

     ```bash
     docker build -t Lichtblick .
     ```

   - Run using docker-compose:

     ```bash
     docker-compose up -d
     ```

6. **Database Operations**:
   - Restore Database:

     ```bash
     docker exec -ti lichtblick-db pg_restore -U postgres -c -d test /backups/daily/lichtblick-db-latest.sql.gz
     ```

   - Backup Database:

     ```bash
     docker exec -ti lichtblick-db pg_dump -U postgres lichtblick-db > lichtblick-db.sql
     cat lichtblick-db.sql | docker exec -i lichtblick-db psql -U postgres -d lichtblick-db
     ```

## Contribution

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is open-source. Please ensure to adhere to the licensing terms when using or modifying this software.

---

Note: Some of the features and setup steps are inferred based on the available information. It would be beneficial to have more specific details about the bot's functionalities, its use cases, and any additional setup steps or requirements. If you have any questions or need further clarifications, please let me know!
