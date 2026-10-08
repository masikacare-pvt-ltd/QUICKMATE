import base64
import io
from PIL import Image, ImageDraw

def main():
    # Load transparent cropped logo mark
    trans = Image.open('public/logo-transparent.png')
    bbox = trans.getbbox()
    cropped_mark = trans.crop(bbox)

    w, h = cropped_mark.size
    max_dim = max(w, h)

    # In a circle, diameter D. The inner content takes ~72% of circle diameter
    D = int(max_dim / 0.72)

    # 2x supersampled canvas for antialiased circular edges
    canvas_size = D * 2
    supersampled = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))

    # Draw smooth pure white circle
    draw = ImageDraw.Draw(supersampled)
    draw.ellipse([0, 0, canvas_size - 1, canvas_size - 1], fill=(255, 255, 255, 255))

    # Resize mark to 2x for supersampled paste
    mark_2x = cropped_mark.resize((w * 2, h * 2), Image.Resampling.LANCZOS)
    off_x = (canvas_size - w * 2) // 2
    off_y = (canvas_size - h * 2) // 2
    supersampled.paste(mark_2x, (off_x, off_y), mark_2x)

    # Master 512x512 rounded circular logo
    circle_logo = supersampled.resize((512, 512), Image.Resampling.LANCZOS)
    circle_logo.save('public/logo-circle.png')
    print("Saved public/logo-circle.png")

    # Multi-resolution ICO with smooth circle
    sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    circle_logo.save('public/favicon.ico', format='ICO', sizes=sizes)
    print("Saved public/favicon.ico (rounded circle)")

    # PNG icons
    circle_logo.resize((32, 32), Image.Resampling.LANCZOS).save('public/favicon-32x32.png')
    circle_logo.resize((48, 48), Image.Resampling.LANCZOS).save('public/favicon-48x48.png')
    circle_logo.resize((180, 180), Image.Resampling.LANCZOS).save('public/apple-touch-icon.png')
    circle_logo.resize((192, 192), Image.Resampling.LANCZOS).save('public/icon-192.png')
    circle_logo.resize((512, 512), Image.Resampling.LANCZOS).save('public/icon-512.png')
    circle_logo.resize((512, 512), Image.Resampling.LANCZOS).save('public/icon.png')
    circle_logo.resize((32, 32), Image.Resampling.LANCZOS).save('public/favicon.png')
    print("Saved all PNG icons as circular badges")

    # High-quality SVG with crisp white circle
    buf = io.BytesIO()
    circle_logo.save(buf, format='PNG')
    b64_str = base64.b64encode(buf.getvalue()).decode('utf-8')

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <circle cx="256" cy="256" r="256" fill="#FFFFFF" />
  <image href="data:image/png;base64,{b64_str}" x="0" y="0" width="512" height="512" />
</svg>
'''
    with open('public/favicon.svg', 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print("Saved public/favicon.svg with white rounded circle")

if __name__ == '__main__':
    main()
