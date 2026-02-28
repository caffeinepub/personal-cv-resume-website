# Specification

## Summary
**Goal:** Replace the profile photo in the Hero section with an external LinkedIn image URL.

**Planned changes:**
- In `HeroSection.tsx`, update the `src` attribute of the profile photo `<img>` element to point to the provided LinkedIn URL, while retaining all existing alt text, CSS classes, and error/fallback handling logic.

**User-visible outcome:** The Hero section displays the LinkedIn profile photo instead of the previous image.
