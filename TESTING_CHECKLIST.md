# ✅ Testing Checklist

## Test 1: Browser Test (OPEN NOW)
`test.html` should be open in your browser.

### Calculator Test:
- [ ] Default values show: 5 attendees, $50/hour, 60 minutes
- [ ] Click "Calculate Cost"
- [ ] Should show: **$250.00** total cost
- [ ] Should show: **$4.17** per minute
- [ ] Should show: **$13,000.00** annual impact

### Timer Test:
- [ ] Click "Start" button
- [ ] Timer should count up: 00:00:01, 00:00:02, etc.
- [ ] Cost should increase: $0.07, $0.14, $0.21, etc.
- [ ] Click "Stop" - timer pauses
- [ ] Click "Reset" - goes back to $0.00 and 00:00:00

**If all above work → Calculator logic is perfect! ✅**

---

## Test 2: Get Icons

### Option A: From Downloads
1. Check your Downloads folder
2. Look for: `icon16.png`, `icon48.png`, `icon128.png`
3. Copy them to this project folder

### Option B: Create Manually
Run this in PowerShell:
```powershell
# Creates simple placeholder icons
Add-Type -AssemblyName System.Drawing
$sizes = @(16, 48, 128)
foreach ($size in $sizes) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $graphics = [System.Drawing.Graphics]::FromImage($bmp)
    $graphics.Clear([System.Drawing.Color]::FromArgb(102, 126, 234))
    $font = New-Object System.Drawing.Font("Arial", ($size * 0.5), [System.Drawing.FontStyle]::Bold)
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $graphics.DrawString('$', $font, $brush, ($size * 0.2), ($size * 0.1))
    $bmp.Save("icon$size.png")
    $graphics.Dispose()
    $bmp.Dispose()
}
```

---

## Test 3: Load Chrome Extension

### Steps:
1. Open Chrome
2. Go to: `chrome://extensions/`
3. Toggle ON "Developer mode" (top right)
4. Click "Load unpacked"
5. Select this folder: `C:\Users\shrav\Hackathon\octopus`
6. Extension should appear with $ icon

### Test in Chrome:
- [ ] Click extension icon in toolbar
- [ ] Popup opens (same as test.html)
- [ ] Test calculator: 5 attendees, $50, 60 min = $250
- [ ] Test timer: starts, stops, resets
- [ ] Close popup and reopen - values should be remembered

---

## Test 4: Demo Recording

### What to Show (30 seconds):
1. Click extension icon
2. Say: "This calculates meeting costs in real-time"
3. Enter: 10 attendees, $75/hour, 30 minutes
4. Click Calculate
5. Say: "This 30-minute meeting costs $375"
6. Click Start Timer
7. Say: "Watch the cost accumulate live"
8. Let it run 5-10 seconds
9. Say: "Simple tool, massive savings"

### Recording Tools:
- **Windows**: Win + G (Game Bar)
- **Online**: Loom.com (free)
- **Phone**: Just record your screen

---

## Quick Fixes

### If icons missing:
Extension still works! Chrome shows default icon.

### If popup doesn't open:
Check manifest.json is in root folder.

### If calculator shows NaN:
Make sure all inputs have numbers.

### If timer doesn't start:
Enter attendees and hourly rate first.

---

## You're Ready When:
✅ test.html works perfectly
✅ Icons exist (or you're okay with default)
✅ Chrome extension loads
✅ Demo video recorded

**Time to submit: 5 minutes! 🚀**
