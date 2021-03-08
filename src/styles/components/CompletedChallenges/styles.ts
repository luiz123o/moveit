import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3.5rem 0;
    padding-bottom: 1rem;
    border-bottom: 0.1rem solid ${theme.colors.text.primary};
    color: ${theme.colors.text.base};
    font-weight: 500;

    span {
      &:first-child {
        font-size: 1.8rem;
      }
      &:last-child {
        font-size: 2.4rem;
      }
    }
  `}
`
