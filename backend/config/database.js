import {Sequelize} from "sequelize";

const db = new Sequelize('note_db', 'root', 'kucinghitamdalammobilBMWM3', {
    host: '104.155.152.100',
    dialect: 'mysql'
});

export default db;