import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import HomeIcon from "../../icons/HomeIcon"

import './styles.css'

function Home() {
  return (
    <>
      <Header />
      <main className="body">
        <p>
          O modo mais fácil de <strong>encontrar</strong> e <strong>divulgar</strong> os seus eventos!!
        </p>

        <HomeIcon />
      </main>

      <Footer />
    </>
  )
}

export { Home }