import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import * as S from '../../styles/components/Button/styles'

export type ButtonVariants = 'primary' | 'secondary'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants
  background?: string
  color?: string
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children, variant, type, ...rest } = props

  return (
    <S.Container type={type || 'button'} variant={variant} {...rest}>
      {children}
    </S.Container>
  )
}
export default Button
