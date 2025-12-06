# 💰 Meeting Cost Calculator - Chrome Extension

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-blue?logo=googlechrome)](https://github.com/yourusername/meeting-cost-calculator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Hackathon](https://img.shields.io/badge/Octopus-Hackathon%202024-purple)](https://octopushackathon.devpost.com)

> **Try it now:** Download and open `test.html` in your browser - no installation needed!

## Problem Statement
Companies waste billions of dollars annually on unnecessary or inefficient meetings. Without visibility into the real-time cost of meetings, organizations continue to schedule lengthy meetings with too many attendees, leading to:
- Wasted employee time
- Reduced productivity
- Significant financial losses
- Meeting fatigue and burnout

## Solution
Meeting Cost Calculator is a Chrome extension that provides real-time visibility into the true cost of meetings. It helps teams and managers make data-driven decisions about meeting necessity, duration, and attendance.

## Features

### 1. Quick Cost Calculator
- Input number of attendees
- Set average hourly rate
- Define meeting duration
- Instantly see total meeting cost
- View cost per minute
- Calculate annual impact (for recurring meetings)

### 2. Live Meeting Timer
- Start a real-time timer during meetings
- Watch costs accumulate in real-time
- Visual reminder of meeting expenses
- Stop/reset functionality

### 3. Smart Defaults
- Remembers your settings
- Quick recalculation for different scenarios
- Clean, intuitive interface

## Tech Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Platform**: Chrome Extension (Manifest V3)
- **Storage**: Chrome Storage API
- **No backend required** - runs entirely client-side

## Installation

### Quick Test (No Installation Required):
1. Download this repository
2. Open `test.html` in any browser
3. Start testing immediately!

### Full Chrome Extension:
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked"
5. Select the project folder
6. Click the extension icon ($ symbol) in your toolbar

**See [INSTALLATION.md](INSTALLATION.md) for detailed instructions.**

## Usage

1. **Click the extension icon** in your Chrome toolbar
2. **Enter meeting details**:
   - Number of attendees (e.g., 5)
   - Average hourly rate (e.g., $50)
   - Meeting duration in minutes (e.g., 60)
3. **Click "Calculate Cost"** to see:
   - Total meeting cost
   - Cost per minute
   - Annual impact if meeting is recurring
4. **Use Live Timer** during actual meetings:
   - Click "Start" when meeting begins
   - Watch real-time cost accumulation
   - Click "Stop" to pause, "Reset" to clear

## Business Impact

### For Managers:
- Make informed decisions about meeting necessity
- Optimize meeting duration and attendance
- Justify meeting policies with data

### For Teams:
- Increased awareness of time value
- Encourages more efficient meetings
- Promotes asynchronous communication when appropriate

### ROI Example:
- Company with 100 employees
- Average salary: $75,000/year ($36/hour)
- Reduces unnecessary meetings by 2 hours/week per person
- **Annual savings: $374,400**

## Screenshots

### Main Calculator
![Calculator Interface](screenshot-calculator.png)

### Live Timer
![Live Timer](screenshot-timer.png)

## Future Enhancements
- Google Calendar integration
- Team/department cost tracking
- Meeting efficiency reports
- Slack/Teams notifications
- Multi-currency support
- Company-wide analytics dashboard

## Project Structure
```
meeting-cost-calculator/
├── manifest.json          # Extension configuration
├── popup.html            # Main UI
├── popup.js              # Core logic
├── styles.css            # Styling
├── icon16.png            # Extension icon (16x16)
├── icon48.png            # Extension icon (48x48)
├── icon128.png           # Extension icon (128x128)
├── create-icons.html     # Icon generator
└── README.md             # Documentation
```

## License
MIT License - Free to use and modify

## Author
Built for Octopus Hackathon 2024

## Contact
For questions or feedback: [Your Email]

---

**Make every meeting count! 🐙💻**
