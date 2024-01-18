from pathlib import Path
import segno

qrcodes_dir = Path(__file__).parent.parent / "qrcodes"
qrcodes_dir.mkdir(exist_ok=True)
site_dir = Path(__file__).parent.parent / "_site"
for html in site_dir.rglob("*.html"):
    url = f"https://florian-jackisch.github.io/{html.relative_to(site_dir)}"
    segno.make_qr(url).save(qrcodes_dir / f"{html.stem}.png", scale=10)
