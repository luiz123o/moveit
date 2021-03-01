import styled, { css } from 'styled-components'
import Button from '../../../components/Button/Button'

export const Container = styled.div``

export const StatsButton = styled(Button)``

export const FinishedButton = styled(Button)`
  ${({ theme }) => css`
    &:disabled {
      background: ${theme.colors.white};
      color: ${theme.colors.text};
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${theme.colors.blueDark};
    }
  `}
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-space-evenly;

    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 6rem rgba(0, 0, 0, 0.05);
    border-radius: 0.5rem;
    font-size: 12rem;
    text-align: center;

    span {
      flex: 1;
      &:first-child {
        border-right: 0.1rem solid #f0f1f3;
      }
      &:last-child {
        border-left: 0.1rem solid #f0f1f3;
      }
    }
  }
  > span {
    font-size: 10.4rem;
    margin: 0 0.5rem;
  }
`
