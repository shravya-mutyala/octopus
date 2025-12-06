# 🚀 Installation Guide

## For Judges & Testers

### Option 1: Quick Browser Test (30 seconds)
**No installation needed!**

1. Download or clone this repository
2. Open `test.html` in any browser (Chrome, Firefox, Edge, etc.)
3. Test the calculator and timer immediately

**Try this:**
- Enter: 5 attendees, $50/hour, 60 minutes
- Click "Calculate Cost" → Should show $250
- Click "Start" timer → Watch cost accumulate in real-time

---

### Option 2: Full Chrome Extension (2 minutes)

#### Step 1: Download
```bash
git clone https://github.com/shravya-mutyala/octopus.git
cd octopus
```

Or download ZIP from https://github.com/shravya-mutyala/octopus and extract it.

#### Step 2: Install in Chrome
1. Open Chrome browser
2. Go to `chrome://extensions/`
3. Toggle **"Developer mode"** ON (top right corner)
4. Click **"Load unpacked"**
5. Select the downloaded folder
6. Done! Click the extension icon ($ symbol) in your toolbar

#### Step 3: Test It
1. Click the extension icon
2. Enter meeting details:
   - Attendees: 5
   - Hourly Rate: $50
   - Duration: 60 minutes
3. Click "Calculate Cost"
4. Try the live timer by clicking "Start"

---

## Test Scenarios

### Scenario 1: Small Team Meeting
- **Input:** 5 attendees, $50/hour, 60 min
- **Expected:** $250 total, $4.17/min, $13,000 annual

### Scenario 2: Executive Meeting
- **Input:** 10 attendees, $150/hour, 120 min
- **Expected:** $3,000 total, $25/min, $156,000 annual

### Scenario 3: Quick Standup
- **Input:** 8 attendees, $40/hour, 15 min
- **Expected:** $80 total, $5.33/min, $4,160 annual

---

## Features to Test

✅ **Calculator**
- Instant cost calculation
- Per-minute breakdown
- Annual impact projection

✅ **Live Timer**
- Real-time cost accumulation
- Start/Stop/Reset controls
- Visual time display

✅ **Persistence**
- Values saved when you close popup
- Reopen extension to see saved values

---

## Troubleshooting

**Extension doesn't load?**
- Make sure all files are in the same folder
- Check that `manifest.json` is in the root directory

**Popup doesn't open?**
- Refresh the extension in `chrome://extensions/`
- Click "Reload" button under the extension

**Calculator shows NaN?**
- Enter valid numbers in all fields
- Make sure values are greater than 0

**Timer doesn't start?**
- Enter attendees and hourly rate first
- Click "Calculate Cost" before starting timer

---

## System Requirements

- **Browser Test:** Any modern browser (Chrome, Firefox, Edge, Safari)
- **Extension:** Google Chrome or Chromium-based browsers (Edge, Brave, Opera)
- **No backend required** - runs entirely client-side
- **No API keys needed** - works offline

---

## Quick Demo

Watch the 30-second demo video: [Add your video link here]

Or see screenshots in the README.md

---

## Support

Questions? Issues? 

GitHub: https://github.com/shravya-mutyala/octopus

GitHub Issues: https://github.com/shravya-mutyala/octopus/issues

---

**Built for Octopus Hackathon 2024** 🐙💻
