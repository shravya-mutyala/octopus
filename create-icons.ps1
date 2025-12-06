Add-Type -AssemblyName System.Drawing

$sizes = @(16, 48, 128)

foreach ($size in $sizes) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $graphics = [System.Drawing.Graphics]::FromImage($bmp)
    
    # Background color (purple)
    $graphics.Clear([System.Drawing.Color]::FromArgb(102, 126, 234))
    
    # Draw dollar sign
    $fontSize = [Math]::Floor($size * 0.6)
    $font = New-Object System.Drawing.Font("Arial", $fontSize, [System.Drawing.FontStyle]::Bold)
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    
    # Center the text
    $text = '$'
    $textSize = $graphics.MeasureString($text, $font)
    $x = ($size - $textSize.Width) / 2
    $y = ($size - $textSize.Height) / 2
    
    $graphics.DrawString($text, $font, $brush, $x, $y)
    
    # Save
    $bmp.Save("icon$size.png")
    
    Write-Host "Created icon$size.png" -ForegroundColor Green
    
    $graphics.Dispose()
    $bmp.Dispose()
}

Write-Host "`nAll icons created successfully!" -ForegroundColor Green
