const { expect, test } = require('@playwright/test');

test('home page', async ({ page }) => {
  await page.goto('https://sireto.io/');

  // Wait for the page title and log it
  const pageTitle = await page.title();
  console.log("Page title is:", pageTitle);

  // Expect the title to match
  await expect(page).toHaveTitle(/Sireto Technology/); // Adjusted regex for the actual title

  // Log the page URL
  const pageUrl = page.url();
  console.log("Page URL is:", pageUrl);

  // Verify the URL
  await expect(page).toHaveURL('https://sireto.io/');

  await page.close();
});
