# Vercel Deployment Guide for NovaPay

This guide will walk you through setting up automated deployments to Vercel using GitHub Actions for your NovaPay project.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Vercel Setup](#vercel-setup)
3. [GitHub Secrets Configuration](#github-secrets-configuration)
4. [Workflow Overview](#workflow-overview)
5. [Deployment Process](#deployment-process)
6. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have:
- ✅ A GitHub account with repository access
- ✅ A Vercel account (sign up at [vercel.com](https://vercel.com))
- ✅ Node.js 20+ installed locally (for testing)
- ✅ Git configured with `master` branch

---

## Vercel Setup

### Step 1: Create Vercel Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Configure the project:
   - **Project Name**: `novapay` (or your preferred name)
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (or leave default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (Next.js default)
   - **Install Command**: `npm ci`
5. **DO NOT** deploy yet - we'll use GitHub Actions for deployment

#### Alternative: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Create project (this will link to your repo)
vercel --prod
```

### Step 2: Get Vercel Credentials

You need to collect the following information from Vercel:

1. **VERCEL_TOKEN**:
   - Go to [Vercel Settings → Tokens](https://vercel.com/account/tokens)
   - Click **"Create Token"**
   - Name it: `github-actions-deploy`
   - Copy the token (you won't see it again!)

2. **VERCEL_ORG_ID**:
   - Go to [Vercel Settings → General](https://vercel.com/account/general)
   - Find **"Organization ID"** and copy it

3. **VERCEL_PROJECT_ID**:
   - Go to your project settings in Vercel
   - Navigate to **Settings → General**
   - Find **"Project ID"** and copy it

---

## GitHub Secrets Configuration

### Step 1: Add Secrets to GitHub Repository

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add the following secrets:

| Secret Name | Value | Description |
|------------|-------|-------------|
| `VERCEL_TOKEN` | Your Vercel token | Authentication token for Vercel API |
| `VERCEL_ORG_ID` | Your Organization ID | Your Vercel organization identifier |
| `VERCEL_PROJECT_ID` | Your Project ID | Your Vercel project identifier |

### Step 2: Verify Secrets

After adding all secrets, verify they are listed in the repository secrets page.

---

## Workflow Overview

The project includes one GitHub Actions workflow:

### Deploy to Vercel (`deploy.yml`)
- **Triggers**: 
  - When code is pushed to `master` branch
  - When a PR is merged into `master` branch
  - Manual trigger via GitHub Actions UI
- **Deploys to**: Vercel Production environment
- **Location**: `.github/workflows/deploy.yml`

### Workflow Steps

The workflow follows these steps:
1. ✅ Checkout code from repository
2. ✅ Setup Node.js 20 environment
3. ✅ Install dependencies (`npm ci`)
4. ✅ Run linter (non-blocking)
5. ✅ Build the project (`npm run build`)
6. ✅ Deploy to Vercel

---

## Deployment Process

### Automatic Deployment

#### Method 1: Push to master branch

```bash
git checkout master
git add .
git commit -m "Your commit message"
git push origin master
```

The workflow will automatically trigger and deploy to Vercel.

#### Method 2: Merge PR to master

1. Create a Pull Request to `master` branch
2. Review and approve the PR
3. Merge the PR
4. The workflow will automatically trigger and deploy to Vercel

### Manual Deployment

1. Go to **Actions** tab in GitHub
2. Select **"Deploy to Vercel"** workflow
3. Click **"Run workflow"**
4. Select `master` branch and click **"Run workflow"**

---

## Environment Variables

### Setting Environment Variables in Vercel

You need to configure environment variables for your Vercel project:

1. Go to your project in Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add all required environment variables
4. Select environment: **Production** (or **Preview** if needed)

### Common Environment Variables

Based on your project structure, you may need:
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `JWT_REFRESH_SECRET` - JWT refresh token secret
- `AUTH_SECRET` or `NEXTAUTH_SECRET` - NextAuth secret
- `NEXTAUTH_URL` or `NEXT_PUBLIC_APP_URL` - Your application URL
- `GOOGLE_CLIENT_ID` - Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth client secret
- Any other API keys or secrets your application requires

---

## Branch Protection (Recommended)

To ensure code quality, set up branch protection rules for `master`:

1. Go to **Settings** → **Branches**
2. Add rule for `master` branch:
   - ✅ Require pull request reviews
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date
   - ✅ Do not allow force pushes
   - ✅ Do not allow deletions

---

## Monitoring Deployments

### GitHub Actions
- View workflow runs: **Actions** tab in GitHub
- Check logs: Click on any workflow run to see detailed logs
- Re-run failed workflows: Click **"Re-run all jobs"**

### Vercel Dashboard
- View deployments: Go to your project → **Deployments** tab
- Check build logs: Click on any deployment to see logs
- View deployment URL: Each deployment has a unique URL

---

## Troubleshooting

### Common Issues

#### 1. Workflow fails with "VERCEL_TOKEN not found"
**Solution**: Ensure you've added `VERCEL_TOKEN` to GitHub Secrets

#### 2. Deployment fails with "Project not found"
**Solution**: 
- Verify `VERCEL_PROJECT_ID` is correct
- Ensure the project ID matches the project in your Vercel account

#### 3. Build fails during deployment
**Solution**:
- Check build logs in GitHub Actions
- Verify all environment variables are set in Vercel
- Test build locally: `npm run build`

#### 4. Authentication errors
**Solution**:
- Verify `VERCEL_TOKEN` is valid and not expired
- Check `VERCEL_ORG_ID` matches your organization

#### 5. Environment variables not available
**Solution**:
- Ensure environment variables are set in Vercel project settings
- Verify they're set for the correct environment (Production/Preview)

### Debugging Steps

1. **Check GitHub Actions logs**:
   - Go to Actions tab
   - Click on failed workflow
   - Review error messages

2. **Test locally**:
   ```bash
   npm ci
   npm run build
   ```

3. **Verify Vercel configuration**:
   - Check project settings in Vercel dashboard
   - Verify build command and output directory

4. **Check secrets**:
   - Verify all secrets are correctly named
   - Ensure no typos in secret names

---

## Best Practices

1. ✅ **Test before deploying**
   - Test your code locally
   - Run `npm run build` to ensure it builds successfully
   - Fix any linting errors

2. ✅ **Use Pull Requests**
   - Create PRs for code review
   - Let workflows deploy automatically on merge

3. ✅ **Monitor deployments**
   - Check deployment status
   - Review build logs
   - Test deployed applications

4. ✅ **Keep secrets secure**
   - Never commit secrets to repository
   - Rotate tokens periodically
   - Use environment variables in Vercel

5. ✅ **Version control**
   - Tag releases in Git
   - Keep changelog updated
   - Document breaking changes

---

## Quick Start Checklist

- [ ] Create Vercel account
- [ ] Create Vercel project
- [ ] Get VERCEL_TOKEN from Vercel
- [ ] Get VERCEL_ORG_ID from Vercel
- [ ] Get VERCEL_PROJECT_ID from Vercel project
- [ ] Add all three secrets to GitHub repository
- [ ] Configure environment variables in Vercel
- [ ] Push to master branch to trigger first deployment
- [ ] Verify deployment in Vercel dashboard

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

---

## Support

If you encounter issues not covered in this guide:
1. Check Vercel status: [status.vercel.com](https://status.vercel.com)
2. Check GitHub Actions status: [githubstatus.com](https://www.githubstatus.com)
3. Review project logs in both GitHub Actions and Vercel dashboard
4. Consult the troubleshooting section above

---

**Last Updated**: $(date)
**Project**: NovaPay
**Framework**: Next.js 15.5.3
**Branch**: master
