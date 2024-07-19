import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Heading } from '@chakra-ui/react'

export default function Title() {
  const [title, setTitle] = useState("");
  let location = useLocation();

  useEffect(() => {
    switch(location.pathname) {
      case '/about':
        return setTitle("About Me");
      case '/art':
        return setTitle("Art");
      case '/contact':
        return setTitle("Contact");
      default:
        return setTitle("About Me");
    };
  }, [location]);

  return (
      <Heading as='h1' textStyle="bodyHeading" className="sectionTitle" size='xl' textAlign="center" p={2}>{title}</Heading>
  );
}
