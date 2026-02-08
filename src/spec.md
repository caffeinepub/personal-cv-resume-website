# Specification

## Summary
**Goal:** Remove the date-range UI block from each Experience entry so dates and the Calendar icon no longer render.

**Planned changes:**
- Update the Experience card header to stop rendering the date-range block (Calendar icon SVG and the “{startDate} - {endDate}” text).
- Adjust header layout so there is no leftover spacing or gap where the removed block used to be, while keeping role, company, and optional location intact.

**User-visible outcome:** In the Experience section, users no longer see the Calendar icon or date range text on any experience card, and the header layout remains clean and correctly aligned.
