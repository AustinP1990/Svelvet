import { test, expect } from '@playwright/test';

const testRoute = '/drawer';

test.describe('Svelvet Component Tests', () => {
	test.beforeEach(async ({ page }) => {
		// Navigate to the page where your Svelvet component is rendered
		await page.goto(testRoute);
	});

	test('Drag and Drop Nodes', async ({ page }) => {
		const dragSource = page.locator('.defaultNodes').first();
		const dropTarget = page.locator('#drop_zone');
		const initialNodeCount = await page.locator('.svelvet-node').count();

		await dragSource.dragTo(dropTarget);

		await expect(page.locator('.svelvet-node')).toHaveCount(initialNodeCount + 1);
	});

	test('DrawerController component', async ({ page }) => {
		// shows the drawer
		await page.keyboard.press('d');
		// Open the drawer
		await page.keyboard.press('D');

		// Check if Node is displayed
		const node = await page.$('text=Node');
		expect(node).toBeTruthy();

		// Press 'T' to toggle to Anchor
		await page.keyboard.press('T');
		const anchor = await page.$('text=Anchor');
		expect(anchor).toBeTruthy();

		// Press 'T' to toggle to Edge
		await page.keyboard.press('T');
		const edge = await page.$('text=Edge');
		expect(edge).toBeTruthy();

		// Press 'T' to toggle back to Node
		await page.keyboard.press('T');
		const nodeAgain = await page.$('text=Node');
		expect(nodeAgain).toBeTruthy();

		// Close the drawer
		await page.keyboard.press('D');
	});

	// ... more tests
});
