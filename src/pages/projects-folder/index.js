import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects-folder.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Projects = ({ data }) => {
    console.log(data);
    const contentData = data.allMarkdownRemark.nodes
    const contactData = data.site.siteMetadata.contact

    return ( 
        <Layout>
            <div className={styles.portfolio}>
            <h2>Projects Page</h2>
            <h3>Some projects I've been working on:</h3>
            <div className={styles.datain}>
              {contentData.map(d => (
                <Link to={'/projects-folder/' + d.frontmatter.slug} key={d.id}>
                  <div>
                    <GatsbyImage image={getImage(d.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt={d.frontmatter.title}/>
                    <h3>{d.frontmatter.title}</h3>
                    <p>{d.frontmatter.stack}</p>
                  </div>
                </Link>
              ))}
            </div>
            <p>Like what you see? contact me at: { contactData } </p>
        </div>
        </Layout>
     );
}
 
export default Projects;

export const query = graphql`
query DataInQuery {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
    }
  }
  site {
    siteMetadata {
      contact
    }
  }
}
`