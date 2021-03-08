import { ButtonProps } from 'components/Button'
import { darken } from 'polished'

import styled, { css } from 'styled-components'

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.button.start};
    color: ${({ theme }) => theme.colors.text_icons};
    transition: background 2s ease;

    &:hover {
      background: ${darken(0.2, '#2e86de')};
    }
    &:focus {
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.button.stop};
    color: ${({ theme }) => theme.colors.text_icons};
    transition: background 1s ease;
    &:hover {
      background: ${darken(0.1, '#f20732')};
      color: ${({ theme }) => theme.colors.text_icons};
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
    background: ${background || theme.colors.accent.soft};
    color: ${color || theme.colors.text_icons};
    font-size: 2rem;
    font-weight: 600;

    cursor: pointer;

    ${variant && variants[variant]}
  `}
`
