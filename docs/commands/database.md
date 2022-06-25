# Database

## Creating a Database

```shell
maid database maid-db
```

## Create a Database User

If you need another user for your database, create one by executing the following command:

```shell
maid database:user maid-db 
```

## Delete a Database User

If you don't need the database user anymore, you can delete it with the following command:

```shell
maid database:user:delete maid-db user-2
```

## Delete a Database

To delete a database instance

```shell
maid database:delete maid-db
```
