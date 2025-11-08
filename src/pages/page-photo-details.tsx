import { useParams } from "react-router";
import Text from "../components/text";

export default function PagePhotoDetails() {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <Text variant="heading-medium">Pagina detalhe da foto</Text>
      <hr />
      <Text variant="heading-medium">ID da foto: {id}</Text>
    </>
  );
}
