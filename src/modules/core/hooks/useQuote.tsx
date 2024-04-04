import React from 'react';

import axios from 'axios';

const useQuote = () => {
  const [quote, setQuote] = React.useState<{
    content: string;
    author: string;
    tag: Array<string>;
  } | null>();
  React.useEffect(() => {
    axios
      .get('https://api.quotable.io/random')
      .then((res) => setQuote(res.data))
      .catch((error) => error);
  }, []);
  return { quote };
};

export default useQuote;
