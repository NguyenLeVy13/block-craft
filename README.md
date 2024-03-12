<details>
<summary>Setup & Run App</summary>
1. Next install the packages

         $ yarn install

2. Update the `DATABASE_URL` var in `.env` to match your new DB connection string generated from Mongo Cloud (https://cloud.mongodb.com) View setup mongo cloud account bellow

3. Once your Mongo Cloud account is setup, you are going to want to create the database in your new mongo cloud and seed it with data:
        
        $ npx prisma db push

        $ yarn run seed

4. Then you need to generate a new prisma client using your database provoder settings.

        $ npx prisma generate

5. Now you'll be able to access this database locally via a visual editor and verify the table have been created.

        $ npx prisma studio
    
    You can also use Mongo Compass as your database GUI. Download and install to connect: [Mongo Compass](https://www.mongodb.com/products/compass)

6. Finally, run the app:

        $ yarn run dev
        
<summary>Run Json Server</summary>
        $ npx json-server -p 4000 db.json

</details>