# Academic Personal Homepage

This is an academic personal homepage template inspired by the design of [Bangbang Ren's homepage](https://renbangbang.github.io) at National University of Defense Technology.

## Features

- **Clean Academic Design**: Professional layout suitable for researchers and academics
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Left Sidebar Navigation**: Easy access to all sections
- **Multiple Pages**:
  - Home (Biography, Research Interests, News, Publications)
  - Teaching
  - Awards
  - Professional Service
  - News
  - Publications
  - Funding Projects
  - Students
  - Open Source

- **SEO Optimized**: Meta tags and semantic HTML structure
- **Fast Loading**: Pure HTML/CSS/JS with no external dependencies
- **Print Friendly**: Optimized styles for printing
- **Visitor Statistics**: Real-time visit count and geographic location display

## How to Use

### 1. Fork this Repository

Click the "Fork" button at the top right of this page to create your own copy.

### 2. Rename the Repository

For a personal GitHub Pages site, rename the repository to `yourusername.github.io`.

### 3. Customize the Content

Edit the HTML files to replace the content with your own information:

- `index.html` - Main page with biography, news, and publications
- `teaching.html` - Your teaching experience
- `awards.html` - Your awards and honors
- `service.html` - Professional service activities
- `news.html` - News and announcements
- `publications.html` - Complete list of publications
- `projects.html` - Research funding projects
- `students.html` - Student supervision information
- `opensource.html` - Open source contributions

### 4. Customize the Styles

Edit `css/style.css` to change colors, fonts, and layout if needed.

### 5. Enable GitHub Pages

1. Go to your repository's Settings
2. Scroll down to the "GitHub Pages" section
3. Select "main" branch as the source
4. Your site will be published at `https://yourusername.github.io`

## Customization Guide

### Changing Personal Information

In `index.html`, look for the `.profile-header` section and update:

```html
<header class="profile-header">
    <h1>Your Name</h1>
    <div class="profile-info">
        <p class="title">Your Position</p>
        <p class="affiliation">
            <a href="your-institution-link">Your Institution</a>
        </p>
        <p class="email">Email: yourname[at]yourdomain.edu</p>
    </div>
</header>
```

### Adding Publications

Add new publications to the list in `index.html` or `publications.html`:

```html
<li>
    <span class="venue-tag">[Venue'Year]</span> 
    <a href="paper-link">Paper Title</a>. 
    (<span class="venue">Venue, CCF-Rating</span>), Year.
</li>
```

### Adding News Items

Add news items with dates:

```html
<li>
    <span class="news-date">MM/YYYY</span> 
    Your news content here.
</li>
```

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
/* Primary Colors */
--background: #FFFFFF;
--text-primary: #000000;
--link-color: #0000EE;
```

## File Structure

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
│   └── main.js             # JavaScript for mobile menu
└── README.md               # This file
```

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

This template is available under the MIT License. Feel free to use and modify it for your personal academic homepage.

## Credits

Design inspired by [Rong Gu's academic homepage](https://cs.nju.edu.cn/gurong/index.htm) at Nanjing University.

Built with pure HTML, CSS, and minimal JavaScript.

---

## Visitor Statistics Setup

This template includes three visitor tracking options:

### 1. 不蒜子 (Busuanzi) - Simple Visit Counter

No setup required! The counter works automatically and shows:
- Total page views
- Unique visitors
- Your current location (city, country)
- Your IP address

### 2. 百度统计 (Baidu Analytics) - For Chinese Users

1. Register at [https://tongji.baidu.com](https://tongji.baidu.com)
2. Create a new website tracking project
3. Get your tracking ID (format: `hm.js?xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)
4. Replace `YOUR_BAIDU_TRACKING_ID` in all HTML files:

```html
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?YOUR_BAIDU_TRACKING_ID";
  ...
})();
</script>
```

### 3. Google Analytics - For International Users

1. Register at [https://analytics.google.com](https://analytics.google.com)
2. Create a new property and get your tracking ID (format: `G-XXXXXXXXXX`)
3. Replace `YOUR_GA_TRACKING_ID` in all HTML files:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_TRACKING_ID');
</script>
```

### Location Detection

The template automatically detects visitor location using free IP geolocation APIs:
- Primary: [ipapi.co](https://ipapi.co)
- Fallback: [ipinfo.io](https://ipinfo.io)

No API key required for basic usage!

### Viewing Statistics

- **Busuanzi stats** appear directly on your webpage
- **Baidu/Google stats** require logging into their respective dashboards
