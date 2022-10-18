import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media screen and (max-width: 690px) {
    font-size: 7.5rem;
    line-height: 6rem;
  }

  @media screen and (max-width: 590px) {
    font-size: 5.63rem;
    line-height: 4.5rem;
  }

  @media screen and (max-width: 490px) {
    font-size: 4.22rem;
    line-height: 3.38rem;
  }

  @media screen and (max-width: 390px) {
    font-size: 3.17rem;
    line-height: 2.53rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 2rem;
    line-height: 1rem;
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${({ theme }) => theme['green-500']};

  width: 2rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
