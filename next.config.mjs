import nextra from 'nextra'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // mandatory for export
  },
  basePath: "/studio-docs",
  // distDir: "build", // optional custom output directory
}

// Set up Nextra with its config (empty here)
const withNextra = nextra({})

// Export final config with Nextra applied
export default withNextra({
  ...nextConfig,
})