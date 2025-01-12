#!/bin/bash

# Exit on any error
set -e

# Run the release script to bump the version and update the changelog
echo "Running npm run release to update the version and changelog..."
npm run release

# Get the new version from package.json
VERSION=$(node -p "require('./package.json').version")

# Commit the changes and tag the release
echo "Committing the release and creating a tag..."
GIT_COMMITTER_NAME="release-script" \
git add CHANGELOG.md package.json package-lock.json
# Skip husky hooks and commit with a regular message
git commit --no-verify -m "chore(release): $VERSION"
git tag -a "v$VERSION" -m "Release v$VERSION"

# Publish the package to NPM
echo "Publishing the package to NPM..."
if npm publish --access=public; then
  echo "Package published successfully! 🚀"
else
  echo "Publishing failed. Aborting tag push."
  git tag -d "v$VERSION"  # Delete the local tag to avoid mismatch
  exit 1
fi

# Push changes and tags to the remote repository
echo "Pushing commits and tags to origin..."
git push origin main --follow-tags

echo "Release v$VERSION completed successfully! 🚀"
