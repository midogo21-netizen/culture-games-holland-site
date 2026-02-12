

## Add Founder Photos to Facilitation & Background Section

### What will change
Each founder's bio paragraph will have a small circular photo placed to the left of the text, creating a clean layout with the image alongside the description.

### Implementation

**1. Copy uploaded images to project assets**
- Copy Rory's photo to `src/assets/founders/rory.jpg`
- Copy Mehdi's photo to `src/assets/founders/mehdi.jpg`

**2. Update `src/components/Founders.tsx`**
- Import both images
- For each bio paragraph, wrap the content in a flex container with:
  - A small circular image (around 16x16 / 64px) on the left using `rounded-full` and `object-cover`
  - The existing text paragraph on the right
- Use `flex items-start gap-4` to align the circle photo at the top of each paragraph

### Technical Details

The layout for each founder bio will change from a simple `<p>` to:

```text
<div class="flex items-start gap-4">
  <img class="w-16 h-16 rounded-full object-cover shrink-0" />
  <p>Bio text...</p>
</div>
```

No other sections or layout changes will be made.

