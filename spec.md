# Specification

## Summary
**Goal:** Replace the current profile picture in the hero section with a new photo downloaded from a LinkedIn URL, saved as a local static asset.

**Planned changes:**
- Download the image from the provided LinkedIn URL and save it as a local static asset under `frontend/public/assets/generated/`
- Update `HeroSection.tsx` to reference the new local asset as the profile picture, replacing the previously set profile photo

**User-visible outcome:** The hero section displays the new LinkedIn profile photo as the profile picture.
