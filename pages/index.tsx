import CustomCursor from "@/lib";

export default function Home() {
  return (
    <>
      <CustomCursor text="Click Me!" color="red">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </CustomCursor>{" "}
      <CustomCursor
        image="https://i.giphy.com/media/IuyTts5mlRpHa/giphy.webp"
        className="rounded-full"
      >
        <h1 className="text-4xl font-bold">Hello World</h1>
      </CustomCursor>
    </>
  );
}

