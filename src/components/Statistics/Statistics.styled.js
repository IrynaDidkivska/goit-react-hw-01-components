import { styled } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  gap: ${({ theme }) => theme.spacing(4)};
  width: 250px;
  border: 2px solid #938e8e;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.default};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 2em;
  padding: 20px;
  background-color: white;
  width: 100%;
  text-align: center;
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};
  gap: ${({ theme }) => theme.spacing(2)};
  border: 2px solid #ff47c554;
  background-color: #da90b8;
`;
