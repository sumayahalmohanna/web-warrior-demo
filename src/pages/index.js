import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import * as styles from '../styles/home.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Home({data}) {
  console.log(data);
  //const {title, description} = data.site.siteMetadata;

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>This website was built with Gatsby.js and deployed with Github and Netlify!</p>
          <Link className={styles.btn} to='/projects'>My Portfolio</Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt='banner image.'/>
        {/**<img src='/banner.png' alt='my banner img.' style={{maxWidth: '100%'}} /> */}
        {/**<p>{title} - {description}</p> */}
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
}
`


/**This is a page query - only works on this page bc of props */
// export const query = graphql`
// query MyQuery {
//   site {
//     siteMetadata {
//       description
//       title
//     }
//   }
// }`