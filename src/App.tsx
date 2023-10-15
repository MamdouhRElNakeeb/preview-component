import React, { useState } from "react";
import { Button, Flex, Grid, GridItem, Heading, Input, Text, Textarea } from "@chakra-ui/react";

function App() {
  const [data, setData] = useState({
    title: "New Title",
    subTitle: "luxury brand for you",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    imageUrl:
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5139&q=80",
    buttonText: "Getting Started",
    buttonUrl: "https://www.google.com.vn"
  });

  const handleOnChange = (key: string, value: string) => {
    setData((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Grid templateColumns="repeat(4, 1fr)" h="100dvh">
      <GridItem colSpan={1} h="100%" p={6}>
        <Heading mb={6}>Hero</Heading>
        <Input
          placeholder="Title"
          mb={6}
          value={data?.title}
          onChange={(event) => handleOnChange("title", event.target.value)}
        />
        <Textarea
          placeholder="Description"
          mb={6}
          value={data?.description}
          onChange={(event) => handleOnChange("description", event.target.value)}
        />
        <Input
          placeholder="Image Url"
          mb={6}
          value={data?.imageUrl}
          onChange={(event) => handleOnChange("imageUrl", event.target.value)}
        />
        <Input
          placeholder="Button text"
          mb={6}
          value={data?.buttonText}
          onChange={(event) => handleOnChange("buttonText", event.target.value)}
        />
        <Input
          placeholder="Button Url"
          mb={6}
          value={data?.buttonUrl}
          onChange={(event) => handleOnChange("buttonUrl", event.target.value)}
        />
      </GridItem>
      <GridItem colSpan={3} bg="blue" h="100%">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          backgroundImage={data?.imageUrl}
          w="100%"
          h="100%"
          backgroundSize="cover"
          p={10}>
          <Text mb={10} textAlign="center" textTransform="uppercase">
            {data?.subTitle}
          </Text>

          <Heading mb={10} textAlign="center">
            {data?.title}
          </Heading>

          <Text mb={10} textAlign="center">
            {data?.description}
          </Text>

          <Button onClick={() => handleClick(data?.buttonUrl)}>{data?.buttonText}</Button>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default App;
