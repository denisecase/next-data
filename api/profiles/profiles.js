// This file performs the following functions:

// Parses the request query parameter
// Uses the query parameter to select a single profile 
// Sends the retrieved profile as a response

// This API will give either all profiles or just a single one, 
// based on the Route. 
// Use an app interface page to display them.


const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  try{
  const [profile] = await db.query(escape`
    SELECT *
    FROM profiles
    WHERE id = ${req.query.id}
  `)
  res.status(200).json({ profile })
  }
  catch(error){
    return {error}
  }
}