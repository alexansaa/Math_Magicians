import { useState, useEffect } from 'react';

const baseURL = 'https://api.api-ninjas.com/v1/quotes?category=movies';
const apiKey = 'xs1lhvlYhQQTDXI2TUdCeQ==JJgaQ0kspETdrSRz';

class Quote {
  constructor(quote, author, category) {
    this.quote = quote;
    this.author = author;
    this.category = category;
  }
}

function GetElement(quoteObj) {
  const MyQuote = new Quote(quoteObj[0].quote, quoteObj[0].author, quoteObj[0].category);
  return `${MyQuote.quote} -${MyQuote.author}-`;
}

export default function RederQuote() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const myHeaders = {
          'X-Api-Key': apiKey,
        };
        const res = await fetch(baseURL, {
          headers: myHeaders,
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) {
    return (
      <div>
        <p>Quote:</p>
        <p>We don&apos;t have quotes right now!</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <p>Quote:</p>
        <p>Is Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <p>Quote:</p>
      <p>{GetElement(data)}</p>
    </div>
  );
}
