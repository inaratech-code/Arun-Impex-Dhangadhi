# Cloudflare Pages Deployment Guide

This guide will help you deploy the Arun Impex website to Cloudflare Pages with the domain `arunimpex.com.np`.

## Prerequisites

1. A Cloudflare account (sign up at https://dash.cloudflare.com/sign-up)
2. Your domain `arunimpex.com.np` added to Cloudflare
3. GitHub repository access (https://github.com/inaratech-code/Arun-Impex-Dhangadhi.git)

## Deployment Steps

### Step 1: Connect GitHub Repository to Cloudflare Pages

1. Log in to your Cloudflare dashboard
2. Go to **Workers & Pages** → **Pages**
3. Click **Create a project**
4. Click **Connect to Git**
5. Select **GitHub** and authorize Cloudflare to access your repositories
6. Select the repository: `inaratech-code/Arun-Impex-Dhangadhi`
7. Click **Begin setup**

### Step 2: Configure Build Settings

Use these build settings:

- **Framework preset**: `Next.js`
- **Build command**: `npm run build:cloudflare` (this cleans cache before building)
- **Build output directory**: `.next`
- **Root directory**: `/` (leave as default)
- **Environment variables**: (add any if needed)

**Note**: The `build:cloudflare` command removes webpack cache files that exceed Cloudflare's 25 MiB file size limit.

### Step 3: Configure Custom Domain

1. After the first deployment completes, go to your project settings
2. Navigate to **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter: `arunimpex.com.np`
5. Cloudflare will automatically configure DNS records

### Step 4: DNS Configuration

Make sure your domain DNS is managed by Cloudflare:

1. In Cloudflare dashboard, select your domain `arunimpex.com.np`
2. Go to **DNS** → **Records**
3. Ensure you have:
   - An **A** record pointing to Cloudflare Pages (or CNAME)
   - Cloudflare will auto-create this when you add the custom domain

### Step 5: SSL/TLS Settings

1. Go to **SSL/TLS** in your domain settings
2. Set encryption mode to **Full (strict)**
3. SSL certificate will be automatically provisioned

## Automatic Deployments

Cloudflare Pages will automatically deploy:
- Every push to the `main` branch (production)
- Every pull request (preview deployments)

## Manual Deployment via Wrangler CLI (Optional)

If you prefer CLI deployment:

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy .next --project-name=arun-impex
```

## Troubleshooting

### File Size Error (25 MiB limit)
If you see an error about files exceeding 25 MiB:
- The build command `npm run build:cloudflare` should automatically clean cache files
- If the issue persists, add this to your build command: `rm -rf .next/cache && npm run build`
- Ensure `.next/cache/` is in your `.gitignore`

### Build Fails
- Check build logs in Cloudflare dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Cloudflare uses Node 18+ by default)

### Domain Not Working
- Verify DNS records are correct
- Check SSL/TLS settings
- Wait for DNS propagation (can take up to 24 hours)

### Images Not Loading
- Ensure images are in the `public` folder
- Check image paths are correct
- Verify Next.js Image optimization is working

## Support

For issues, check:
- Cloudflare Pages Documentation: https://developers.cloudflare.com/pages/
- Next.js on Cloudflare: https://developers.cloudflare.com/pages/framework-guides/nextjs/

