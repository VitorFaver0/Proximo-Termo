import Head from 'next/head'
import Image from 'next/image'
import { Container } from '../styles/pages/Home'
import LogoSVG from '../assets/git.svg'

const Home: React.FC = () =>{
  return (
    <Container>
      <Head>
        <title>HomePage</title>
      </Head>
      <LogoSVG></LogoSVG>
      <h1>Hello World</h1>
      <h2>Default Project - NextJS</h2>
      <h3>By. Vitor Favero</h3>
    </Container>
  )
}

export default Home
