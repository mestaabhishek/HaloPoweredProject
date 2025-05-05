const TIMEOUT = 10000;

export async function stopLoadingIfNecessary(): Promise<void> {
    try {
        await browser.waitUntil(async () => {
            const state = await browser.execute(() => document.readyState);
            return state === 'complete';
        }, { timeout: TIMEOUT, timeoutMsg: 'Page took too long to load!' });

    } catch (error) {
        console.log('Page load timeout reached, stopping...');
        await browser.keys('\uE00C'); // Send ESC key
    }
}
