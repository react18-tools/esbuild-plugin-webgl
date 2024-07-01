import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { RotatingCube } from "./rotating-cube";

describe.concurrent("rotating-cube", () => {
	afterEach(cleanup);

	test("Dummy test - test if renders without errors", ({ expect }) => {
		const clx = "my-class";
		render(<RotatingCube className={clx} />);
		expect(screen.getByTestId("rotating-cube").classList).toContain(clx);
	});
});
