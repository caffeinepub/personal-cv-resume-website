# Specification

## Summary
**Goal:** Apply the user-uploaded profile photo so the Hero section avatar displays the new image via a static frontend asset.

**Planned changes:**
- Convert the uploaded `cropped_circle_image-1.png` into a square 512×512 JPG and place it at `frontend/public/assets/generated/vibhanshu-profile.dim_512x512.jpg`.
- Keep the Hero avatar `<img>` `src` unchanged as `/assets/generated/vibhanshu-profile.dim_512x512.jpg` so it loads without any backend dependency.

**User-visible outcome:** The Hero section avatar shows the new uploaded profile photo with no broken image icon.
