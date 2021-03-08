import Button from 'components/Button'
import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;

    background: ${theme.colors.background};
    border-radius: 0.5rem;
    box-shadow: 0 0 6rem rgba(0, 0, 0, 0.05);
    padding: 1.2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `}
`

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    color: ${({ theme }) => theme.colors.text.title};
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.4;
  }
  p {
    color: ${({ theme }) => theme.colors.text.base};
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;

    max-width: 70%;
    margin-top: 4rem;
    img {
      margin-bottom: 1rem;
      opacity: 0.7;
    }
  }
`
export const ChallengeActive = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;

    header {
      color: ${theme.colors.text.title};
      font-weight: 600;
      font-size: 2rem;
      padding: 0 2rem 1.5rem;
      border-bottom: 0.1rem solid ${theme.colors.shapes.primary};
    }
    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      strong {
        font-weight: 600;
        font-size: 3rem;
        color: ${theme.colors.text.base};
        margin: 1.5rem 0 1rem;
      }
      p {
        line-height: 1.5;
        color: ${theme.colors.text.primary};
      }
    }
    footer {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      margin: 0 auto;
    }
  `}
`
export const CompleteButton = styled(Button)`
  height: 5rem;
  width: 15.4rem;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  border: 0;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.status.success};

  :hover {
    background: ${darken(0.02, '#68b75c')};
    transition: 0.2s ease;
  }
`
export const FailureButton = styled(Button)`
  height: 5rem;
  font-size: 1.6rem;
  height: 5rem;
  width: 15.4rem;
  border-radius: 0.5rem;
  border: 0;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.status.failure};

  :hover {
    background: ${darken(0.02, '#f01842')};
  }
`
