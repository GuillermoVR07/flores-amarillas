import { useState } from 'react';

const useExpanded = (initialState = false) => {
  const [expanded, setExpanded] = useState(initialState);
  return [expanded, setExpanded];
};

export default useExpanded