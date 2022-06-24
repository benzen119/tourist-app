import { Trip } from "./ccomponents/trip/Trip"
import { TripsProps } from "./Trips.types"
import * as Styled from './Trips.styles';

export const Trips = ({ isLoading, trips }: TripsProps) => {
  return (
    <Styled.PageWrapper>
      <Styled.PageHeader>Recently viewed trips</Styled.PageHeader>
      {isLoading ? <p>Loading....</p> : (
        <Styled.TripsWrapper>
          {trips.map(({ id, ...props }) => <Trip key={id} {...props} />)}
        </Styled.TripsWrapper>
      )}
    </Styled.PageWrapper>
  )
}
