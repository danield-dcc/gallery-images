import InputText from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react";
import { useCallback, useState, type ChangeEvent } from "react";
import { debounce } from "../helpers/utils";

export default function PhotosSearch() {
  const [inputValue, setInputValue] = useState("");

  const debouncedSetValue = useCallback(
    debounce((value: string) => {
      console.log("valor com debounce", value);
    }, 1000),
    []
  );

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    console.log("Campo de texto: ", value);
    setInputValue(value);
    debouncedSetValue(value);
  }

  return (
    <InputText
      icon={SearchIcon}
      placeholder="Buscar fotos"
      className="flex-1"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
