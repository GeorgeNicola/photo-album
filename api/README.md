## Start DEV

1. cd api
2. npm install
3. npm run dev

## Start Docker

1. Start the containers

```
   docker compose up
```

## Init SQL Database & add data

1. Connect to PostgreSQL

- POSTGRES_HOST=postgresdb => the name of the container for DB
- POSTGRES_PORT=5432 => The port in the container ( not in the current machine )

2. Init the database - needed only once

```
docker cp ./database/databaseInit.sql postgres-db:/docker-entrypoint-initdb.d/init.sql
```

```
docker exec -u postgres postgres-db psql postgres postgres -f docker-entrypoint-initdb.d/init.sql
```

3. Add data in database ( Postman endpoints )

## Endpoints

```
http://localhost:5000/user/getAllUsers
http://localhost:5000/user/createUser
http://localhost:5000/usermongo/getAllUsers
http://localhost:5000/usermongo/createUser
```
