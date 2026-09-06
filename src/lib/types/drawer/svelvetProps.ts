import type { ComponentLike } from '../general';
import type { NodeConfig, EdgeStyle, XYPair } from '$lib/types';

export interface SvelvetConfig {
	width: number;
	height: number;
	minimap: boolean;
	translation: XYPair;
	controls: boolean;
    keyControls: boolean;
	edge: ComponentLike | null;
	edgeStyle: EdgeStyle;
	snapTo: number;
	editable: boolean;
	fitView: boolean | 'resize';
	locked: boolean;
	zoom: number;
	theme: string;
	mermaid: string;
	mermaidConfig: Record<string, NodeConfig>;
	TD: boolean;
	disableSelection: boolean;
	raiseEdgesOnSelect: boolean | 'source' | 'target';
	modifier: 'alt' | 'ctrl' | 'shift' | 'meta';
	trackpadPan: boolean;
	toggle: boolean;
	/** ✅ Add this line **/
	drawer?: boolean;
}
