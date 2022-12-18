import {Flex, Input} from "@chakra-ui/react";
import {BiArrowBack} from "react-icons/bi";
import {useRouter} from "next/router";
import {useState} from "react";

export default function SearchBar({handleLook}) {
    const router = useRouter()
  const [inputText, setInput] = useState("");
  return (
    <Flex py="40px" justifyContent="center">
      <Flex gap={10} width="60%" alignItems="center" color="white">
        <BiArrowBack
          onClick={() => handleLook(false)}
          style={{width: "50px", height: "50px"}}
        />
        <form
            style={{width:"100%"}}
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`/search?q=${inputText}&p=1`);
          }}
        >
          <Input
            value={inputText}
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </Flex>
    </Flex>
  );
}
