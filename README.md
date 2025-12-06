# Tyler Sheetz Hair Extensions - Landing Page

A professional, modern landing page for St. Petersburg's premier hair extension specialist, Tyler Sheetz.

## 🌟 Features

### Current Implementation (Phase 1)
- ✅ **Responsive Design**: Fully mobile-friendly using Bootstrap 5
- ✅ **Modern Aesthetics**: Sophisticated rose gold & champagne color palette
- ✅ **Service Showcase**: Dedicated sections for all extension types (K-Tip, Beaded Weft, I-Tip, Tape, V-Light)
- ✅ **Video Integration**: Auto-playing transformation videos
- ✅ **Image Gallery**: Beautiful portfolio showcase with lightbox
- ✅ **Contact Form**: Easy-to-use contact system
- ✅ **Testimonials**: Client reviews and ratings
- ✅ **Smooth Animations**: AOS (Animate On Scroll) library integration
- ✅ **SEO Optimized**: Semantic HTML, meta tags, and proper structure

### Coming Soon (Phase 2)
- 📅 **Booksy Integration**: Direct appointment booking
- 📊 **Analytics**: Google Analytics 4 tracking
- 📱 **Instagram Feed**: Live social media integration
- ❓ **FAQ Section**: Common questions answered
- 🎯 **Enhanced SEO**: Schema markup and local optimization

## 🗂️ Project Structure

```
tyler-baby/
│
├── index.html              # Main landing page
├── css/
│   └── styles.css         # Custom styles and color scheme
├── js/
│   └── main.js            # Interactive functionality
├── assets/
│   ├── images/            # Image assets (to be added)
│   │   ├── tyler-profile.jpg
│   │   ├── gallery-1.jpg to gallery-6.jpg
│   │   └── hero-bg.jpg
│   ├── videos/            # Video assets (to be added)
│   │   ├── transformation-1.mp4
│   │   └── transformation-2.mp4
│   └── README.md          # Assets documentation
│
├── BOOKSY_INTEGRATION.md  # Phase 2 booking integration guide
├── IMPROVEMENTS.md         # UI/UX recommendations & best practices
└── README.md              # This file
```

## 🎨 Color Scheme

The site uses a sophisticated palette perfect for a luxury hair stylist:

- **Primary Rose Gold**: `#b76e79` - Main brand color
- **Champagne**: `#f4e4d7` - Elegant accent
- **Soft White**: `#fafaf8` - Clean background
- **Accent Rose**: `#d4a5a5` - Hover states
- **Charcoal**: `#3a3a3a` - Dark elements
- **Gold**: `#c9a36a` - Premium highlights

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Code editor (VS Code recommended)
- Basic knowledge of HTML/CSS/JavaScript

### Installation

1. **Clone or download** this repository to your local machine

2. **Add your assets**:
   - Place images in `assets/images/` folder
   - Place videos in `assets/videos/` folder
   - See `assets/README.md` for detailed requirements

3. **Update content**:
   - Edit `index.html` to update text, phone numbers, and links
   - Modify contact information in the Contact section
   - Update social media links (Instagram, Facebook, TikTok)

4. **Customize** (optional):
   - Adjust colors in `css/styles.css` (look for `:root` variables)
   - Modify service descriptions
   - Change testimonials

5. **Test locally**:
   - Open `index.html` in your web browser
   - Test all links and forms
   - Check mobile responsiveness

### Deployment Options

#### Option 1: Netlify (Recommended - Free)
1. Create account at https://netlify.com
2. Drag and drop your project folder
3. Get instant HTTPS domain
4. Automatic deployments on updates

#### Option 2: Vercel (Free)
1. Create account at https://vercel.com
2. Import from GitHub or upload files
3. Automatic HTTPS and global CDN

#### Option 3: GitHub Pages (Free)
1. Create GitHub repository
2. Push code to repository
3. Enable GitHub Pages in settings
4. Access at: `username.github.io/repo-name`

#### Option 4: Traditional Hosting
- Upload files via FTP to any web host
- Works with: Bluehost, HostGator, GoDaddy, etc.

## 📋 Asset Requirements

### Images Needed:
1. `tyler-profile.jpg` - Professional photo of Tyler (800x1000px)
2. `gallery-1.jpg` through `gallery-6.jpg` - Before/after transformations (800x1000px each)
3. `hero-bg.jpg` - Optional hero background (1920x1080px)
4. `favicon.ico` - Browser tab icon (32x32px)

### Videos Needed:
1. `transformation-1.mp4` - Beaded weft showcase (15-30 seconds, under 10MB)
2. `transformation-2.mp4` - K-Tip application (15-30 seconds, under 10MB)

**See `assets/README.md` for detailed specifications and optimization tips.**

## 🔧 Configuration

### Update Contact Information

In `index.html`, find and update:

```html
<!-- Phone Number -->
<a href="tel:+17275551234">(727) 555-1234</a>

<!-- Email -->
<a href="mailto:hello@tylersheetz.com">hello@tylersheetz.com</a>

<!-- Social Media -->
<a href="https://instagram.com/tylersheetz">Instagram</a>
<a href="https://facebook.com/tylersheetz">Facebook</a>
<a href="https://tiktok.com/@tylersheetz">TikTok</a>
```

### Update Business Hours

```html
<p>Tuesday - Saturday: 9:00 AM - 6:00 PM<br>Sunday - Monday: Closed</p>
```

## 📱 Phase 2: Booksy Integration

For detailed instructions on adding online booking functionality:

**See: `BOOKSY_INTEGRATION.md`**

This guide includes:
- Step-by-step Booksy widget integration
- Multiple implementation options
- Code examples and troubleshooting
- Testing checklist

## 💡 Improvement Suggestions

For comprehensive UX/UI recommendations and best practices:

**See: `IMPROVEMENTS.md`**

This document covers:
- Design enhancements
- SEO optimization
- Performance improvements
- Marketing integration
- Advanced features roadmap
- Launch checklist

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styles with CSS variables
- **JavaScript (ES6)**: Interactive functionality
- **Bootstrap 5.3.2**: Responsive framework
- **Bootstrap Icons**: Icon library
- **Google Fonts**: Cormorant Garamond & Montserrat
- **AOS Library**: Scroll animations

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Videos not playing
- Ensure videos are in MP4 format with H.264 codec
- Check file size (keep under 10MB)
- Verify file names match HTML references
- Some browsers block autoplay with sound (videos muted by default)

### Images not loading
- Verify image files exist in `assets/images/` folder
- Check file names match HTML references (case-sensitive)
- Ensure images are web-optimized (under 200KB each)

### Contact form not working
- Current implementation shows a success message only
- For production, integrate with a backend service:
  - Formspree: https://formspree.io
  - Netlify Forms: https://www.netlify.com/products/forms/
  - EmailJS: https://www.emailjs.com

### Animations not working
- Ensure AOS library is loading (check browser console)
- Verify internet connection (CDN dependencies)
- Check JavaScript console for errors

## 📈 Analytics Setup

### Google Analytics 4

1. Create GA4 property at https://analytics.google.com
2. Get your Measurement ID
3. Add to `index.html` before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔒 Security Considerations

- ✅ Use HTTPS (SSL certificate) for production
- ✅ Validate form inputs
- ✅ Add reCAPTCHA to contact form to prevent spam
- ✅ Keep dependencies updated
- ✅ Don't commit sensitive information to version control

## 📝 License & Usage

This website is designed specifically for Tyler Sheetz Hair Extensions. 

For questions about licensing or using this template:
- Contact the developer
- Ensure you have rights to all images and content
- Respect Bootstrap's MIT license
- Credit photographers/content creators

## 🤝 Support

### For Technical Issues:
- Review documentation in this README
- Check `IMPROVEMENTS.md` for best practices
- Consult Bootstrap 5 documentation
- Browser developer tools (F12)

### For Content Updates:
- Edit HTML directly for text changes
- Update CSS for style modifications
- Modify JavaScript for functionality changes
- Optimize assets before uploading

### For Booksy Integration:
- See `BOOKSY_INTEGRATION.md`
- Contact Booksy support
- Test in staging before production

## 🎯 Success Checklist

Before launching:

- [ ] All images uploaded and optimized
- [ ] All videos uploaded and compressed
- [ ] Contact information updated
- [ ] Social media links working
- [ ] Forms tested and functional
- [ ] Mobile responsiveness verified
- [ ] Cross-browser testing complete
- [ ] SSL certificate installed
- [ ] Google Analytics configured
- [ ] Google Business Profile created
- [ ] SEO meta tags optimized
- [ ] Performance tested (GTmetrix/PageSpeed)

## 📞 Contact

For questions about this website:
- **Email**: hello@tylersheetz.com
- **Phone**: (727) 555-1234
- **Instagram**: @tylersheetz
- **Location**: St. Petersburg, Florida

## 🌟 Credits

- **Design & Development**: Professional landing page template
- **Photography**: Tyler Sheetz (add your own)
- **Icons**: Bootstrap Icons
- **Fonts**: Google Fonts (Cormorant Garamond, Montserrat)
- **Animations**: AOS Library
- **Framework**: Bootstrap 5

---

## 🎨 Design Philosophy

This website was designed with these principles:

1. **Luxury & Sophistication**: Rose gold palette conveys premium service
2. **Clarity & Simplicity**: Easy navigation and clear CTAs
3. **Trust & Credibility**: Testimonials, professional imagery, and certifications
4. **Mobile-First**: Optimized for on-the-go clients
5. **Performance**: Fast loading, smooth animations
6. **Conversion-Focused**: Every element drives toward booking

---

**Built with ❤️ for Tyler Sheetz Hair Extensions**

*Last Updated: December 2024*
