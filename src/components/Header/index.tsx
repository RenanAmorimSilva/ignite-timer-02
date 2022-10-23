import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink
          to="/"
          title="Timer"
          style={({ isActive }) => ({
            color: isActive ? '#00875F' : '#E1E1E6',
          })}
        >
          <Timer size={24} />
        </NavLink>
        <NavLink
          to="/history"
          title="Histórico"
          style={({ isActive }) => ({
            color: isActive ? '#00875F' : '#E1E1E6',
          })}
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
