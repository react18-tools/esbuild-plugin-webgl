import MyButton from "./button";
import { LandingPage } from "@repo/shared/dist/server";
import { Demo, RotatingCube } from "@repo/shared";

export const metadata = {
  title: "Esbuild Plugin Webgl",
};

/** next.js landing page */
export default function Page() {
  return (
    <LandingPage title="Next.js Example">
      <RotatingCube />
      <Demo />
      <MyButton />
    </LandingPage>
  );
}
