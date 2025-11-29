import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";

import PhotosList from "../contexts/photos/components/photos-list";

export default function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        albums={[
          { id: "3421", title: "Album 1" },
          { id: "3422", title: "Album 2" },
          { id: "3423", title: "Album 3" },
        ]}
        className="mb-9"
      />
      <PhotosList
        photos={[
          {
            id: "123",
            title: "olá mundo!",
            imageId: "portrait-tower.png",
            albums: [
              { id: "3421", title: "Album 1" },
              { id: "3422", title: "Album 2" },
              { id: "3423", title: "Album 3" },
            ],
          },
          {
            id: "123",
            title: "olá mundo!",
            imageId: "portrait-tower.png",
            albums: [
              { id: "3421", title: "Album 1" },
              { id: "3422", title: "Album 2" },
              { id: "3423", title: "Album 3" },
            ],
          },
        ]}
      />
    </Container>
  );
}
