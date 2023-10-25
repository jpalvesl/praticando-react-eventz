import { Link } from 'react-router-dom'
import { CaretLeft } from "@phosphor-icons/react";

import { Button } from '../../components/Button'
import './styles.css'
import Logo from '../../icons/Logo';

function Login() {
  return (
    <main className='body-login'>
      <aside className='access-aside'>

        <p>Acesse!</p>
      </aside>

      <div className='login-container'>
        <form>
          <Logo width={200} />

          <input type="text" />
          <input type="text" />
          
          <Link>
            Esqueci minha senha...
          </Link>

          <Button type='filled'>
            Entrar !
          </Button>

          <Link>
            Criar minha conta
          </Link>

          <Link>
            <CaretLeft size={32} />
            Voltar
          </Link>
        </form>
      </div>
    </main>
  )
}

export { Login }