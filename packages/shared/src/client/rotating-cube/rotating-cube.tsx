import { HTMLProps, useEffect, useRef } from "react";
import styles from "./rotating-cube.module.scss";
import { createCube } from "./utils";

/**
 *
 *
 * @example
 * ```tsx
 * <RotatingCube />
 * ```
 *
 * @source - Source code
 */
export const RotatingCube = ({ className, ...props }: HTMLProps<HTMLCanvasElement>) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const gl = canvasRef.current.getContext("webgl");
    if (!gl) {
      // skipcq: JS-0052 -- Alert required
      alert("Your browser does not support WebGL");
      return;
    }
    createCube(canvasRef.current, gl);
  }, []);
  return <canvas className={[className, styles.cube].join(" ")} ref={canvasRef} {...props} />;
};
