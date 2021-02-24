import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 8.8rem;
    height: 8.8rem;
    border-radius: 50%;
  }
  div {
    margin-left: 1.5rem;

    strong {
      font-weight: 600;
      font-size: 2.4rem;

      color: ${({ theme }) => theme.colors.title};
    }

    p {
      font-size: 1.6rem;
      margin-top: 0.5rem;

      > img {
        margin-right: 0.5rem;
      }
    }
  }
`
