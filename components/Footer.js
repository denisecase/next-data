import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Footer = () => (
  <div>
    <br />
    <br />
    <hr />
    <p>Reference:</p>
    <ul>
      <li>
      <Link href={`https://zeit.co/guides/deploying-next-and-mysql-with-now`}>
        <a style={linkStyle}>code</a>
      </Link></li>
      <li>
      <Link href={`https://next-sql.now.sh/`}>
        <a style={linkStyle}>demo</a>
      </Link></li>
      <br/>
      <li>
      <Link href={`https://zeit.co/guides/deploying-next-and-mysql-with-now`}>
        <a style={linkStyle}>Zeit Tutorial</a>
      </Link></li><li>
      <Link href={`https://next-mysql.now.sh/`}>
        <a style={linkStyle}>Zeit Tutorial Demo</a>
      </Link>
      </li>
    </ul>
    <hr />
    <p>Next steps:</p>
    <ul>
      <li>
        <a style={linkStyle} href="https://zeit.co/">
          Get Started with Zeit Now Deployment
      </a></li>
      <li>
        <a style={linkStyle} href="https://nextjs.org/learn/basics/getting-started">
          Learn Next.js (a React framework for the JAM stack)
      </a>
      </li>
    </ul>
    <style jsx>{`
    p {
      font-family: 'Arial'
    }
    a {
      font-family: 'Arial';
      text-decoration: none;
      color: blue;
    }
    a:hover {
      opacity: 0.6;
    }
  `}</style>
  </div>
)

export default Footer