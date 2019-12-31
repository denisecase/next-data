// This file performs the following functions:

// Parses the request query parameters
// Uses the query parameters to determine which profiles are required
// Requests only the required profiles from the database
// Queries the database to get the total records
// Uses the records count to calculate pagination
// Sends the retrieved profiles and pagination details as a response

// req.query, res.status(), res.json() : property and methods
// are automatically added when using @now/node
// install now globally with 
// npm i -g now


const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  let page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 9
  if (page < 1) page = 1

  try {
    const profiles = await db.query(escape`
      SELECT * 
      FROM profiles 
      ORDER BY id 
      LIMIT ${(page - 1) * limit}, ${limit} 
      `
    )
    const count = await db.query(escape`
      SELECT COUNT(*) AS profilesCount FROM profiles 
      `
    )
  }
  catch (error) {
    return { error }
  }

  const { profilesCount } = count[0] || 0
  const pageCount = Math.ceil(profilesCount / limit)
  res.status(200).json({ profiles, pageCount, page })
}