import { ButtonProps } from 'components/Button/Button'
import styled, { css } from 'styled-components'

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.blueLight};
    color: ${({ theme }) => theme.colors.white};
    transition: background 2s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.blueDark};
    }
    &:focus {
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.title};
    transition: background 1s ease;
    &:hover {
      background: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.white};
    }
    &:focus {
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
    }
  `
}

export const Container = styled.button<ButtonProps>`
  ${({ theme, variant, color, background }) => css`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 0.5rem;
    background: ${background || theme.colors.blueLight};
    color: ${color || theme.colors.white};
    font-size: 2rem;
    font-weight: 600;

    cursor: pointer;

    ${variant && variants[variant]}
  `}
`
