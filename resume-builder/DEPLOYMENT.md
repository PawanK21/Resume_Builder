# GitHub Actions Deployment Guide

## Overview
This project is configured with automated GitHub Actions workflows for:
- **Building**: Compiles React code with Vite
- **Testing**: Runs security audits and dependency checks
- **Deployment**: Automatically deploys to GitHub Pages on push to main branch

## Workflows

### 1. Deploy Workflow (`.github/workflows/deploy.yml`)
**Triggers:**
- Push to `main` or `master` branch
- Pull requests to `main` or `master` branch

**Steps:**
1. Checkout code
2. Setup Node.js (18.x, 20.x)
3. Install dependencies with npm ci
4. Run security audit
5. Build project with `npm run build`
6. Deploy to GitHub Pages (on main branch push only)
7. Upload build artifacts
8. Comment on PRs with build status

### 2. Security Workflow (`.github/workflows/security.yml`)
**Triggers:**
- Weekly schedule (Sunday at 00:00 UTC)
- Manual trigger via workflow_dispatch

**Steps:**
1. Checkout code
2. Install dependencies
3. Run npm audit for vulnerabilities
4. Run OWASP Dependency Check
5. Upload security reports

## Setup Instructions

### 1. Enable GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Set source to `Deploy from a branch`
4. Select `gh-pages` branch
5. Choose `/root` as the publishing directory

### 2. Configure Custom Domain (Optional)
1. Add your custom domain in the `deploy.yml` under the `cname` field
2. Update your DNS settings to point to GitHub Pages
3. Uncomment the `cname` line in the workflow

### 3. Branch Protection Rules (Recommended)
1. Go to Settings → Branches
2. Add protection rules for `main` branch
3. Require status checks to pass before merging
4. Require branches to be up to date

## Local Development

### Running Locally
```bash
npm install
npm run dev
```
The app will open at `http://localhost:3000`

### Building for Production
```bash
npm run build
```
Output will be in the `dist/` directory

### Preview Production Build
```bash
npm run preview
```

## Environment Variables
Add environment-specific variables in GitHub Secrets:
1. Go to Settings → Secrets and variables → Actions
2. Create new repository secrets as needed

## Monitoring Deployments

### View Workflow Runs
1. Go to Actions tab in your repository
2. Click on a workflow to see details
3. Check logs for build output and errors

### Build Artifacts
Build artifacts are retained for 30 days and available in:
- Actions tab → Workflow run → Artifacts section

## Troubleshooting

### Build Failures
1. Check the workflow logs in Actions tab
2. Verify all dependencies are listed in `package.json`
3. Ensure Node.js version compatibility

### Deployment Issues
1. Verify GitHub Pages is enabled
2. Check branch name is `gh-pages`
3. Ensure `GITHUB_TOKEN` has necessary permissions

### Security Warnings
1. Review npm audit results
2. Update vulnerable packages: `npm audit fix`
3. Check OWASP Dependency Check reports

## Security
- Vulnerabilities are automatically scanned weekly
- Security reports are uploaded as artifacts
- Review CVEs and update dependencies as needed

## Support
For issues or questions, create a GitHub Issue with:
- Workflow error logs
- Expected vs actual behavior
- Steps to reproduce
