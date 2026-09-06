//SnapGrid file defines the grid cell size
//takes node position and rounds it to the nearest grid intersection
//returns new snapped position

// This default size will be changed by Svelvet.svelte
let snapSize = 0;

export function setSnapTo(snapTo: number): void {
	snapSize = snapTo;
}

/**
 * Snaps a given position to the nearest grid cell.
 * @param x - The x-coordinate of the node
 * @param y - The y-coordinate of the node
 * @returns The new snapped (x, y) position
 */
export function getSnappedPosition(x: number, y: number): { x: number; y: number } {
	if (snapSize == 0) {
		return {
			x: x,
			y: y
		};
	} else {
		return {
			x: Math.round(x / snapSize) * snapSize,
			y: Math.round(y / snapSize) * snapSize
		};
	}
}
