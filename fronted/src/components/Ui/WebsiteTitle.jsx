import { useEffect } from "react";

export default function WebsiteTitle({title, children}) {
  useEffect(() => {
    document.title = `${title} | BrainWave`;
  }, [title]);

  return (
    <div>{children}</div>
  )
}
