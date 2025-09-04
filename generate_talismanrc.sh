#!/bin/bash

# List of files to ignore
FILES=(
  "src/app/(payload)/admin/[[...segments]]/not-found.tsx"
  "src/app/(payload)/admin/[[...segments]]/page.tsx"
  # Add more files here as needed
)

echo "fileignoreconfig:" > .talismanrc

for FILE in "${FILES[@]}"; do
  if [ -f "$FILE" ]; then
    CHECKSUM=$(shasum -a 256 "$FILE" | awk '{print $1}')
    echo "  - filename: $FILE" >> .talismanrc
    echo "    checksum: $CHECKSUM" >> .talismanrc
    echo "    ignore_detectors: [filecontent, filename]" >> .talismanrc
  else
    echo "⚠️ File not found: $FILE"
  fi
done

echo 'version: "1.0"' >> .talismanrc
echo "✅ .talismanrc updated successfully."
