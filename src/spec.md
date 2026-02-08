# Specification

## Summary
**Goal:** Update the CV site’s hero avatar image, adjust the Google Drive contact label, and replace the footer closing line with a custom message.

**Planned changes:**
- Replace the static hero avatar asset with the uploaded profile photo, saved at `frontend/public/assets/generated/vibhanshu-profile.dim_512x512.jpg` while keeping the existing `<img>` src as `/assets/generated/vibhanshu-profile.dim_512x512.jpg`.
- Update the Contact section Google Drive card label to display `Google Drive (Projects)` without changing its existing URL behavior.
- Remove the existing footer copyright/caffeine.ai line and replace it with:
  - `Would love to connect and share my ideas and Vision about the data related work.`
  - `Regards Vibhanshu`

**User-visible outcome:** The Hero section shows the updated profile photo, the Google Drive contact item reads “Google Drive (Projects)”, and the footer displays the new closing message with the requested line break.
