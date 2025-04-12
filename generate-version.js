const fs = require('fs');
const path = require('path');
const pkgPath = './package.json'; // Adjust to your correct path if needed
const pkg = require(pkgPath);

// Get the version type (major, minor, patch) from command-line arguments
const versionType = process.argv[2] || 'patch'; // Default to 'patch' if not provided

// Function to increment the version number
function incrementVersion(version, type) {
  const versionParts = version.split('.');
  let [major, minor, patch] = versionParts.map((part) => parseInt(part, 10));

  switch (type) {
    case 'major':
      major += 1;
      minor = 0; // Reset minor and patch to 0 for major increment
      patch = 0;
      break;
    case 'minor':
      minor += 1;
      patch = 0; // Reset patch to 0 for minor increment
      break;
    case 'patch':
      patch += 1; // Only increment patch by default
      break;
    default:
      // console.log(`Invalid version type: ${type}. Defaulting to 'patch'.`);
      patch += 1;
      break;
  }

  return `${major}.${minor}.${patch}`; // Return the new version
}

// Increment the version number
const newVersion = incrementVersion(pkg.version, versionType);

// Prepare the data for version.json
const versionData = {
  name: "Alexandriana",
  version: newVersion,
  releaseDate: new Date().toISOString(),
  author: ".Helloworld Dev"
};

// Write new version into version.json
fs.writeFileSync(path.join(__dirname, 'public', 'version.json'), JSON.stringify(versionData, null, 2));

// Update package.json with the new version
pkg.version = newVersion;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

// console.log(`✅ version.json and ${pkgPath} updated to version ${newVersion}`);
