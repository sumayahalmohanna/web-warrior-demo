import React from 'react';
import Layout from '../components/Layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from '../styles/project-details.module.css';
import { graphql } from 'gatsby';

const ProjectDetails = ({ data }) => {
    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter

    return ( 
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featured}>
                    <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData } alt='this is an alt'/>
                </div>
                {/**dangerous b/c of server side cross scripting attack */}
                <div className={styles.html} dangerouslySetInnerHTML={{__html: html}} />
            </div>
        </Layout>
     );
}
 
export default ProjectDetails;

export const query = graphql`
query ProjectsPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }  
`