import ReactStars from "react-stars";

import { TripType } from "../../Trips.types";
import * as Styled from './Trip.styles'

const currency = '€';

export const Trip = ({
  name,
  countriesCount,
  durationInDays,
  imageUrl,
  price,
  fromPrice,
  rate,
}: TripType) => {
  return (
    <div>
      <img src={imageUrl} alt={name} className="rounded-t-md" />
      <Styled.DeetailsWrapper>
        <Styled.Description>{`${countriesCount} Countries, ${durationInDays} Days`}</Styled.Description>
        <Styled.Title>{name}</Styled.Title>
        <Styled.RatesWrapper>
          <ReactStars
            count={5}
            value={rate}
            size={18}
            color1="#e6e6e6"
            color2="#ffd700"
            edit={false}
            half
          />
          <Styled.RateText>{rate}</Styled.RateText>
        </Styled.RatesWrapper>
        <Styled.PriceText>{`From ${currency}${fromPrice}`} · </Styled.PriceText>
        <Styled.PreviousPriceText>{`Price ${currency}${price}`}</Styled.PreviousPriceText>
      </Styled.DeetailsWrapper>
    </div>
  );
};
