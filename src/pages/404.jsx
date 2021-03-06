import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <h4>oops dead end</h4>
        <Link to="/" className="btn">
          back home
        </Link>
      </main>
    </Layout>
  )
}

export default Error
