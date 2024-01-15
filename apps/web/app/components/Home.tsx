import { Button } from "@repo/ui/button";

export default function Home(): JSX.Element {
  return (
    <main>
      <h1 className="mt-[20vh] ml-[10vw] bg-green-400 text-7xl leading-normal inline-grid test">
        Let's go from here! <Button children={"Go1"} appName="Test" />
      </h1>
    </main>
  );
}
