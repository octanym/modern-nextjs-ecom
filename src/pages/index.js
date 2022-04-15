import Head from 'next/head'
import Link from 'next/link';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';

import products from '@data/products';

import styles from '@styles/Page.module.scss'

<<<<<<< HEAD
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";

export default function Home({ home, products }) {
  const { heroTitle, heroLink, heroDescrip, heroBackground } = home;
  console.log('products:', products)
=======
export default function Home() {
>>>>>>> a42cc683352612fb19887dba36520290ad093de7
  return (
    <Layout>
      <Head>
        <title>Space Jelly Gear</title>
        <meta name="description" content="Get your Space Jelly gear!" />
      </Head>

      <Container>
        <h1 className="sr-only">Space Jelly Gear</h1>

        <div className={styles.hero}>
<<<<<<< HEAD
          <Link href={heroLink} >
            <a>
              <div className={styles.heroContent}>
                <h2>{heroTitle}</h2>
                <p>{heroDescrip}</p>
              </div>
              <img className={styles.heroImage} width={heroBackground.width} height={heroBackground.height} src={heroBackground.url} alt="" />
=======
          <Link href="#">
            <a>
              <div className={styles.heroContent}>
                <h2>Prepare for liftoff.</h2>
                <p>Apparel that&apos;s out of this world!</p>
              </div>
              <img className={styles.heroImage} src="/images/space-jelly-gear-banner.jpg" alt="" />
>>>>>>> a42cc683352612fb19887dba36520290ad093de7
            </a>
          </Link>
        </div>

        <h2 className={styles.heading}>Featured Gear</h2>

        <ul className={styles.products}>
<<<<<<< HEAD
          {products.map(product => {
            return (
              <li key={product.slug}>
                <Link href="#">
                  <a>
                    <div className={styles.productImage}>
                      <img width={product.image.width} height={product.image.height} src={product.image.url} alt="" />
=======
          {products.slice(0, 4).map(product => {
            return (
              <li key={product.id}>
                <Link href="#">
                  <a>
                    <div className={styles.productImage}>
                      <img width="500" height="500" src={product.image} alt="" />
>>>>>>> a42cc683352612fb19887dba36520290ad093de7
                    </div>
                    <h3 className={styles.productTitle}>
                      { product.name }
                    </h3>
                    <p className={styles.productPrice}>
                      ${ product.price }
                    </p>
                  </a>
                </Link>
                <p>
                  <Button>
                    Add to Cart
                  </Button>
                </p>
              </li>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
<<<<<<< HEAD
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api-us-east-1.graphcms.com/v2/cl1xxkwh70pg701xtevc6grft/master',
    cache: new InMemoryCache()
  });

  const data = await client.query({
    query: gql`
      query PageHome {
        page(where: {slug: "home"}) {
          heroDescrip
          heroLink
          heroTitle
          id
          name
          slug
          heroBackground {
            height
            url
            width
          }
        }

        products(first: 4) {
          name
          price
          slug
          image {
            height
            url
            width
          }
        }
      }
    `
  })

  const home = data.data.page;
  const products = data.data.products;

  return {
    props: {
      home,
      products
    }
  }
=======
>>>>>>> a42cc683352612fb19887dba36520290ad093de7
}