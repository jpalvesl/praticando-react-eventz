import Logo from "../../icons/Logo";
import { Button } from "../Button/Index";
import './styles.css'

function Header() {
  return (
    <div className="header">
      <Logo width={120} />

      <div className="buttons">
        <Button type="outline">
          Cadastre-se
        </Button>

        <Button type="filled">
          Acesse
        </Button>
      </div>
    </div>
  )
}

export { Header };