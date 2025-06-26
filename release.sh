
#!/bin/sh
set -e

# Set your repo info here:
REPO_USER="zeloran"
REPO_NAME="daggerheart"

if [ -z "$1" ]; then
  printf "Enter new version (e.g., 1.0.1): "
  read VERSION
else
  VERSION="$1"
fi

TAG="$VERSION"
REPO_URL="https://github.com/$REPO_USER/$REPO_NAME"
SYSTEM_JSON="system.json"
ZIP_NAME="$REPO_NAME-system.zip"

# Check that jq is available
if ! command -v jq >/dev/null 2>&1; then
  echo "Error: jq is required but not found. Please install jq and try again."
  exit 1
fi

# Update system.json with new version, manifest, and url
echo "Updating $SYSTEM_JSON..."
jq \
  --arg version "$VERSION" \
  --arg download "$REPO_URL/releases/download/$TAG/$ZIP_NAME" \
  '.version = $version | .download = $download' \
  "$SYSTEM_JSON" > "$SYSTEM_JSON.tmp" && mv "$SYSTEM_JSON.tmp" "$SYSTEM_JSON"

# Commit and push
git add "$SYSTEM_JSON"
git commit -m "Release $TAG"
git push

# Tag and push tag
git tag "$TAG"
git push origin "$TAG"


echo "Done!"
echo "Go to GitHub Releases for $TAG and upload:"
echo "  - $ZIP_NAME"
echo "  - $SYSTEM_JSON"
echo "Copy the manifest URL for FVTT installer:"
echo "  $REPO_URL/releases/download/$TAG/system.json"

