import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Rachel Peppe</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        rachelpeppedev
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor full stack
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
