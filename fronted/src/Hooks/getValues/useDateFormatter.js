import { useEffect, useState } from "react";

export default function useDateFormatter(dateString) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    };

    if (dateString) {
      setFormattedDate(formatDate(dateString))
    }
  }, [dateString])

  return formattedDate;
}
