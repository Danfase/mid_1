import { useContext } from 'react';
import { LikesContext } from '../context/LikesContext';

export const useLikes = () => useContext(LikesContext);