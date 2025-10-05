import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
    console.log('Installing action dependencies...');
    execSync('npm install', { cwd: __dirname, stdio: 'inherit' });
    console.log('Dependencies installed.');

    console.log('Executing action...');
    await import('./src/action.js');
    console.log('Action execution finished.');

} catch (error) {
    console.error('Failed to install dependencies or run action:', error);
    process.exit(1);
}
