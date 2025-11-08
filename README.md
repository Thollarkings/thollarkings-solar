# Thollarkings Solar - React Project

A modern, dark-themed React website for Thollarkings Solar - a solar energy solutions company.

## Features

- **Dark Theme**: Modern dark design with orange accent colors
- **Responsive Design**: Optimized for all device sizes
- **Three Main Pages**:
  - **Landing Page**: Hero section, services overview, consultation call-to-action
  - **About Us**: Company story, mission/vision, team expertise
  - **Contact**: Working contact form with EmailJS integration
- **Animations**: Smooth page transitions and hover effects using Framer Motion
- **Solar Energy Images**: High-quality images showcasing solar installations
- **Email Integration**: Contact form sends emails to thollarkings@gmail.com

## Technology Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful icons
- **EmailJS**: Email service integration
- **CSS3**: Custom dark theme styling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/thollarkings-solar.git
cd thollarkings-solar
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### EmailJS Setup (Optional)

To enable the contact form email functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and note your Service ID
3. Create an email template with these variables:
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email
   - `{{phone}}` - phone number
   - `{{subject}}` - email subject
   - `{{message}}` - email message
   - `{{project_type}}` - type of project
   - `{{to_email}}` - your email address (thollarkings@gmail.com)
4. Get your Public Key
5. Update the `src/pages/Contact.jsx` file with your EmailJS credentials

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── pages/
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About us page
│   └── Contact.jsx     # Contact page with form
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles and theme
```

## Features Overview

### Landing Page
- Hero section with compelling call-to-action
- Solar solutions grid with beautiful images
- Services section highlighting expertise
- Consultation benefits section
- Contact call-to-action

### About Page
- Company story and background
- Mission, vision, and values
- Statistics and achievements
- Team expertise showcase
- Why choose us section

### Contact Page
- Comprehensive contact form
- Contact information display
- FAQ section
- Real-time form validation
- EmailJS integration ready

### Design Features
- Dark theme with orange accent colors
- Smooth animations and transitions
- Mobile-first responsive design
- Modern card-based layout
- Professional typography
- High-quality imagery

## Customization

### Colors
Update the CSS variables in `src/index.css` to change the theme:
```css
:root {
  --primary-bg: #0a0a0a;
  --secondary-bg: #111111;
  --accent-orange: #ff6b35;
  /* ... other colors */
}
```

### Content
- Update company information in components
- Replace solar images with your own
- Modify contact details in navigation and footer
- Update service descriptions in Home.jsx

### Email Configuration
Update the email configuration in `src/pages/Contact.jsx`:
```javascript
const templateParams = {
  from_name: formData.name,
  from_email: formData.email,
  // ... other fields
}
```

## Deployment

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure environment variables if needed

### Vercel
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your web server

## Support

For questions or support:
- Email: thollarkings@gmail.com
- Phone: 08065970017

## License

This project is proprietary to Thollarkings Solar. All rights reserved.