import { useEffect, useCallback, useState } from 'react';
import { connect } from 'socket.io-client';

import { Trips } from './Trips';
import { TripType } from './Trips.types';

const API_URL = 'http://localhost:3001';

const socket = connect(API_URL);

export const TripsContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trips, setTrips] = useState<TripType[]>([]);

  const fetchData = useCallback(async () => {
    const response = await fetch('/api');
    const data = await response.json();

    setTrips(data.trips);
  }, [])

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    socket.on('change', () => {
      fetchData();
    });
  }, [fetchData]);

  return (
    <Trips isLoading={isLoading} trips={trips}/>
  );
}
