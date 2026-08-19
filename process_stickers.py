import os
from PIL import Image

stickers_dir = r"c:\Users\sharm\Portofolio\public\stickers"

def make_transparent_spider(img_path, out_path, is_hand_sticker=False):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    new_data = []

    for item in datas:
        r, g, b, a = item
        # Calculate brightness
        brightness = (r + g + b) / 3.0

        if is_hand_sticker:
            # For hand sticker: remove only the outer background grey (where r,g,b are close & light grey/off-white)
            # The sticker outline is pure white (r > 245, g > 245, b > 245) or near white, but outer background is around 220-238.
            # Let's check: if background is light greyish off-white (210 <= brightness <= 242) and r,g,b are balanced (not red hand)
            if brightness > 215 and max(r,g,b) - min(r,g,b) < 15 and (r < 248 or g < 248 or b < 248):
                new_data.append((255, 255, 255, 0))
            elif brightness > 248 and max(r,g,b) - min(r,g,b) < 10:
                # White die-cut sticker border - keep white!
                new_data.append((255, 255, 255, 255))
            else:
                new_data.append((r, g, b, a))
        else:
            # For black/red graphics on white background:
            if brightness > 230:
                # Make white background transparent
                alpha = int(255 * (255 - brightness) / 25.0)
                alpha = max(0, min(255, alpha))
                new_data.append((r, g, b, alpha))
            else:
                new_data.append((r, g, b, 255))

    img.putdata(new_data)
    img.save(out_path, "PNG")
    print(f"Saved transparent PNG to {out_path}")

make_transparent_spider(
    os.path.join(stickers_dir, "hanging-spider.jpg"),
    os.path.join(stickers_dir, "hanging-spider.png")
)
make_transparent_spider(
    os.path.join(stickers_dir, "red-spider-logo.jpg"),
    os.path.join(stickers_dir, "red-spider-logo.png")
)
make_transparent_spider(
    os.path.join(stickers_dir, "hand-webshooter.jpg"),
    os.path.join(stickers_dir, "hand-webshooter.png"),
    is_hand_sticker=True
)
make_transparent_spider(
    os.path.join(stickers_dir, "corner-spiderweb.jpg"),
    os.path.join(stickers_dir, "corner-spiderweb.png")
)
