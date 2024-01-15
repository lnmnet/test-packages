import { Suspense } from "react";
import Test from "./components/test";

export default function Page(): JSX.Element {
  return (
    <Suspense fallback={<Loading />}>
      <Test />
    </Suspense>
  );
}

function Loading() {
  return <>loading...</>;
}
