# Specification

## Summary
**Goal:** Replace the current profile picture in the Hero section with the user's LinkedIn photo, served as a local asset.

**Planned changes:**
- Download the LinkedIn profile photo and save it as `frontend/public/assets/generated/profile-photo.png`
- Update the HeroSection component to use this local asset path as the profile picture image source

**User-visible outcome:** The Hero section displays the user's LinkedIn photo as the profile picture, loaded from a local file with no external URL dependency.
