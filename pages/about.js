import Layout from '../components/Layout'

function AboutPage() {
  return (
    <div>
      <Layout>
       <p>This is a demo project to test different parts of a full-stack application.</p>  
    </Layout>
      <style jsx>{`
    p {
      font-family: 'Arial';
      text-align: center;
    }
  `}</style>
    </div>
  )
}

export default AboutPage
