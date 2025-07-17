import nextra from 'nextra'

 /**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  basePath: "/studio-docs",
  // Optional: Change the output directory `out` -> `dist`
  // distDir: "build"
}

// Set up Nextra with its configuration
const withNextra = nextra({
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
})