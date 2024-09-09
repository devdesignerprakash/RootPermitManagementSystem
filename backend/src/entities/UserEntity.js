const { EntitySchema } = require('typeorm');

const UserSchema = new EntitySchema({
    name: "Users",  
    columns: {
        Id: {
            primary: true,
            type: "int",
            generated: true,
        },
        Email: {
            type: 'varchar',
            length: 250,
            unique: true,
            nullable: false,
        },
        Contact: {
            type: "varchar",
            length: 50,
            nullable: false,
        },
        Password: {
            type: "varchar",
            length: 250,
            nullable: false,
        },
        UserType: {
            type: "varchar",
            length: 50,
            nullable: false,
            check: `"UserType" IN ('Admin', 'SuperUser', 'Guest', 'User')`  
        },
    },
});
module.exports=UserSchema;
