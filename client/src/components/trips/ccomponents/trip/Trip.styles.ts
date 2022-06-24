import styled from 'styled-components';

const DeetailsWrapper = styled.div`
  padding: 0.5rem;
`;

const Title = styled.p`
  font-size: 1.125rem;
  font-weight: 800;
  margin-top: -0.25rem;
`;

const Description = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #6b7280;
`;

const RatesWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const RateText = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
  margin-top: 0.2rem;
`;

const PriceText = styled.span`
  font-weight: 500;
`;

const PreviousPriceText = styled.span`
  font-weight: 500;
  color: #6b7280;
  text-decoration-line: line-through;
`;

export {
  DeetailsWrapper,
  Title,
  Description,
  RatesWrapper,
  RateText,
  PriceText,
  PreviousPriceText,
};