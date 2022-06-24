import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
`;

const PageHeader = styled.h1`
  font-size: 1.25rem;;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const TripsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: auto;
`;

export { 
  PageWrapper,
  PageHeader,
  TripsWrapper,
};