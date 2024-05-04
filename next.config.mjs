/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ['./src'],
        prependData: `
            @import '/src/shared/mixins/common.scss';
            @import '/src/shared/mixins/text.scss';
        `
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'staging.mobile.vitame.pro/**'
            }
        ]
    }
}

export default nextConfig

