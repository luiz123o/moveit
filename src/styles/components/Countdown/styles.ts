import styled, { css } from 'styled-components'
import Button from '../../../components/Button'

export const Container = styled.div``

export const StatsButton = styled(Button)`
  svg {
    margin-left: 2rem;
  }
`

export const FinishedButton = styled(Button)`
  ${({ theme }) => css`
    border-bottom: 0.2rem solid ${theme.colors.border};

    > svg {
      margin-left: 2rem;

      fill: ${theme.colors.text_icons};
    }
    &:disabled {
      background: ${theme.colors.shapes.primary};
      color: ${theme.colors.text_icons};
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${theme.colors.shapes.background};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;

    div {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-space-evenly;

      background: ${theme.colors.text.primary};
      box-shadow: 0 0 6rem rgba(0, 0, 0, 0.15);
      border-radius: 1rem;
      font-size: 12rem;
      text-align: center;

      span {
        color: ${theme.colors.text_icons};
        flex: 1;
        &:first-child {
          border-right: 0.2rem solid ${theme.colors.text_icons};
        }
        &:last-child {
          border-left: 0.1rem solid ${theme.colors.text_icons};
        }
      }
    }
    > span {
      color: ${theme.colors.text.primary};
      font-size: 10.4rem;
      margin: 0 0.5rem;
    }
  `}
`
