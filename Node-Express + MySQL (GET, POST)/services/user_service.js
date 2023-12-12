const db = require('../db')

module.exports.getAllUsers = async() => {
    const [rows] = await db.query("SELECT * FROM `user_table`")
        .catch(err => console.log(err))
    return rows;    
}

module.exports.getUserId = async (id) => {
    const [record] = await db.query("SELECT * FROM `user_table` WHERE id = ?", [id])]
    return record;
}

module.exports.addOrEditUser = async(obj, id) => {
    const [{affectedRows}] 
}