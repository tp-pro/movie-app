import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Ces deux lignes sont nécessaires pour définir __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "src/styles")]
    }
};

export default nextConfig;
