# expense-tracker-api

A RESTful API for an expense tracker application.

## Migration Commands

Create a new migration file

```bash
npx knex migrate:make <migration-name> --migrations-directory src/db/migrations
```

Run the migration

```bash
npx knex migrate:latest --knexfile src/db/knexfile.js
```

Create a seed file

```bash
npx knex seed:make <seed-name> --cwd src/db
```

Run the seed

```bash
npx knex seed:run --knexfile src/db/knexfile.js
```

## Environment Variables

```env
PORT=<port>
DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database_name>
```
