import { ThemeContextAtt } from 'contexts/theme'
import { HiMoon, HiSun } from 'react-icons/hi'
import { useContext } from 'react'
import * as S from '../../styles/components/Toggle/styles'

const TogglerTheme = () => {
  const { toggleTheme, currentTheme } = useContext(ThemeContextAtt)

  return (
    <S.SwitchButton type="button" onClick={toggleTheme}>
      {currentTheme === 'light' ? (
        <>
          <span>Dark Mode</span>
          <HiMoon size={20} />
        </>
      ) : (
        <>
          <span>Light Mode</span>
          <HiSun size={20} />
        </>
      )}
    </S.SwitchButton>
  )
}

export default TogglerTheme
