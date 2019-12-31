// create a resuable database connection
// for a serverless environment

const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
})

// export a function that ensures connections 
// are closed once the query has resolved
exports.query = async query => {
  try {
    const results = await db.query(query)
    await db.end() 
  }
  catch (error) {
    return {errror}
  }
}