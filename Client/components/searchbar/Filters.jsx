import {Box, Button, HStack, SimpleGrid} from "@chakra-ui/react";
import {useState} from "react";
import {useRouter} from "next/router";


export default function Filters({handleFilters}) {
  const router = useRouter();
  const [values, setValues] = useState({l: "", g: "", c: ""});
  const handleSelect = ({target}) => {
    if (target.name === "language") {
      setValues({l: target.value, g: "", c: ""});
    } else if (target.name === "genres") {
      setValues({l: "", g: target.value, c: ""});
    } else {
      setValues({l: "", g: "", c: target.value});
    }
  };
  const handleCLick = () => {
    router.push(
      `/search?q=${router.query.q}&p=${router.query.p}&l=${values.l}&g=${values.g}&c=${values.c}`
    );
    handleFilters({...values})
  };
  return (
    <Box py="20px" w={{base: "100%", md: "600px"}}>
      <SimpleGrid columns={{base: 2, md: 4}} spacing={15}>
        <select
          value={values.l}
          onChange={handleSelect}
          name="language"
          style={{
            width: "100%",
            border: "1px solid white",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <option value="">Languages</option>
          <option value="hi">Hindi</option>
          <option value="en">English</option>
          <option value="mr">Marathi</option>
          <option value="ta">Tamil</option>
          <option value="kn">Kannda</option>
        </select>
        <select
          value={values.g}
          onChange={handleSelect}
          name="genres"
          style={{
            width: "100%",
            border: "1px solid white",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <option value="">Genres</option>
          <option value="drama">Drama</option>
          <option value="comedy">Comedy</option>
          <option value="romance">Romance</option>
          <option value="thriller">Thriller</option>
          <option value="fantasy">Fantasy</option>
        </select>
        <select
          value={values.c}
          onChange={handleSelect}
          style={{
            width: "100%",
            border: "1px solid white",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <option value="">Content Type</option>
          <option value="original">Zee Originals</option>
          <option value="movie">Movies</option>
          <option value="news">News</option>
          <option value="tvshow">TV Shows</option>
          <option value="trailer">Trailers</option>
        </select>
        <Button onClick={handleCLick} colorScheme="purple">
          Apply
        </Button>
      </SimpleGrid>
    </Box>
  );
}
