// This file performs the following functions:

// Checks if request is from server or client side
// Makes API request for a single item using a query parameter
// Receives the item data, making it available as a prop
// Displays the item with an option to go back to the gallery

import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const defaultItem =
{
  "address": `Error fetching profile`,
  "avatar": "https://robohash.org/estoditpraesentium.png?size=100x100&set=set1",
  "email": "error@nodata.edu",
  "id": "999",
  "name": "Error"
}

ProfilePage.getInitialProps = async ({ req, query }) => {
  const protocol = req
    ? `${req.headers['x-forwarded-proto']}:`
    : location.protocol
  const host = req ? req.headers['x-forwarded-host'] : location.host
  const pageRequest = `${protocol}//${host}/api/profiles/${query.id}`
  console.log(pageRequest)

  try {
    const res = await fetch(pageRequest)
    let json = await res.json()
    console.log(json)
    return json
  }
  catch (error) {
    return defaultItem
  }
}

function ProfilePage({ profile }) {
  if (typeof profile === 'undefined') profile = defaultItem
  return (
    <><Layout>
      <div>
        <img src={profile.avatar} />
        <h1>{profile.name}</h1>
        <p>{profile.address}</p>
        <p>{profile.email}</p>
        <Link href="/">
          <a>← Back to profiles</a>
        </Link>
      </div>
    </Layout>
    </>
  )
}

export default ProfilePage