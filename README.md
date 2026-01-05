# Expense Tracker API

A RESTful API for an expense tracker application built with Express.js and PostgreSQL.

**Project Reference:** [roadmap.sh/projects/expense-tracker-api](https://roadmap.sh/projects/expense-tracker-api)

## Features

- User authentication (sign up, login) with JWT
- CRUD operations for expenses
- Filter expenses by date range
- Expense categories: Groceries, Leisure, Electronics, Utilities, Clothing, Health, Others

## Tech Stack

- Node.js + Express.js
- PostgreSQL + Knex.js
- JWT for authentication
- Zod for validation

## Setup

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables in `.env`:

```env
PORT=3000
DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database_name>
JWT_SECRET=your-secret-key
```

3. Run migrations:

```bash
npm run migrate
```

4. Start the development server:

```bash
npm run dev
```

## API Routes

### Authentication

- `POST /auth/register` - Register a new user

  - Body: `{ email, password, first_name, last_name, avatar }`

- `POST /auth/login` - Login user

  - Body: `{ email, password }`
  - Returns: JWT token

- `POST /auth/logout` - Logout user (requires authentication)

### Expenses

All expense routes require authentication. Include JWT token in `Authorization: Bearer <token>` header.

- `GET /expenses` - Get all expenses (paginated)

  - Query params: `page`, `limit`, `start_date`, `end_date`

- `GET /expenses/:id` - Get expense by ID

- `POST /expenses` - Create new expense

  - Body: `{ title, description?, amount, category?, date? }`

- `PATCH /expenses/:id` - Update expense

  - Body: `{ title?, description?, amount?, category?, date? }`

- `DELETE /expenses/:id` - Delete expense

## Migration Commands

```bash
# Run migrations
npm run migrate

# Run seeds
npm run seed
```
