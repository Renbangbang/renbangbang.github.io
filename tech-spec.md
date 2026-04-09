# Technical Specification Document

## Component Inventory

### shadcn/ui Components
- None required (pure HTML/CSS implementation)

### Third-party Components
- None required

### Custom Components
1. **Navigation Sidebar** - Fixed left sidebar with menu items
2. **Section Header** - Gray background header for content sections
3. **News Item** - Date-prefixed news entry with optional link
4. **Publication Item** - Venue-tagged publication entry

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Link hover underline | CSS | text-decoration: underline on :hover | Low |
| Page fade-in | CSS | opacity transition on body | Low |
| Mobile menu toggle | Vanilla JS | classList toggle for visibility | Low |

---

## Animation Library Choices

**Primary: CSS Transitions**
- Reason: Academic sites need minimal, professional interactions
- All hover effects implemented via CSS
- No complex animations needed

**Secondary: Vanilla JavaScript**
- For mobile navigation toggle only
- Minimal footprint, no framework needed

---

## Project File Structure

```
/
├── index.html              # Main homepage
├── teaching.html           # Teaching page
├── awards.html             # Awards page
├── service.html            # Professional service page
├── news.html               # News page
├── publications.html       # Full publications list
├── projects.html           # Funding projects page
├── students.html           # Students page
├── opensource.html         # Open source page
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── main.js             # Minimal JavaScript (mobile menu)
└── README.md               # GitHub repository readme
```

---

## Dependencies

### Production Dependencies
- None (pure HTML/CSS/JS)

### Development Dependencies
- None (can be edited directly)

---

## Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

---

## Performance Considerations
- No external dependencies to load
- Minimal CSS (~5KB)
- No JavaScript frameworks
- Fast initial page load
- SEO-friendly static HTML

---

## GitHub Pages Deployment
- Repository name: `username.github.io` (for user site)
- Or any repository with GitHub Pages enabled
- No build process required
- Direct file serving
