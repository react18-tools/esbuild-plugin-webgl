import { HTMLProps, ReactNode } from "react";
import styles from "./rotating-cube.module.scss";

export interface RotatingCubeProps extends HTMLProps<HTMLDivElement> {
	children?: ReactNode;
}

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
export const RotatingCube = ({ children, ...props }: RotatingCubeProps) => {
  const className = [props.className, styles["rotating-cube"]].filter(Boolean).join(" ");
	return (
		<div {...props} className={className} data-testid="rotating-cube">
			{children}
		</div>
	);
}
