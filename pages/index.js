// This file file performs the following functions:

// Checks whether request comes from server or client side
// Makes API request for collection using query parameters
// Receives the collection and pagination data
// Makes them available as props
// Lists the items in a gallery view
// Uses pagination data to create navigation buttons

import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const sampleData = {
  "profiles": [
    {
      "address": "address",
      "avatar": "https://robohash.org/estoditpraesentium.png?size=100x100&set=set1",
      "email": "email",
      "id": "1",
      "name": "Alice"
    },
    {
      "address": "address",
      "avatar": "https://robohash.org/sedquamomnis.png?size=100x100&set=set1",
      "email": "email",
      "id": "2",
      "name": "Betty"
    },
    {
      "address": "address",
      "avatar": "https://robohash.org/atremprovident.png?size=100x100&set=set1",
      "email": "email",
      "id": "3",
      "name": "Chris"
    }
  ]
}

HomePage.getInitialProps = async ({ req, query }) => {
  const protocol = req
    ? `${req.headers['x-forwarded-proto']}:`
    : location.protocol
  const host = req ? req.headers['x-forwarded-host'] : location.host
  const pageRequest = `${protocol}//${host}/api/profiles?page=${query.page ||
    1}&limit=${query.limit || 9}`

  try {
    const res = await fetch(pageRequest)
    const json = await res.status(200).json()
    return json
  }
  catch (error) {
    console.log( {error})
    return sampleData
  }

}

function HomePage({ profiles, page, pageCount }) {
  return (
    <>
    <Layout>
      <h1>Serverless MySQL Application</h1>
      <h2>Robot Profiles</h2>
      <p>This website shows a collection of robot profiles, loaded from a Node.js API that pulls data from Google Cloud SQL (MySQL) and returns it as JSON with pagination.</p>
      <hr/>
      <ul>
        {profiles.map(p => (
          <li className="profile" key={p.id}>
            <Link href={`/profile?id=${p.id}`}>
              <a>
                <img src={p.avatar} />
                <span>{p.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <nav>
        {page > 1 && (
          <Link href={`/?page=${page - 1}&limit=9`}>
            <a >Previous</a>
          </Link>
        )}
        {page < pageCount && (
          <Link href={`/?page=${page + 1}&limit=9`}>
            <a className="next">Next</a>
          </Link>
        )}
      </nav>
      </Layout>
      <style jsx>{`
        h1,h2, a, p {
          font-family: 'Arial';
          text-align: center;
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0px;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </>
  )
}



export default HomePage