#!/usr/bin/env python3
"""Add data-code='XXX' attributes to every <article class='product-card reveal'>
based on the <span class='code'>XXX</span> inside each card."""
import re

with open('catalogue.html', 'r', encoding='utf-8') as f:
    html = f.read()

pattern = re.compile(
    r'<article class="product-card reveal">.*?<span class="code">([A-Z0-9\-]+)</span>',
    re.DOTALL
)

count = 0
def replacer(m):
    global count
    code = m.group(1).strip()
    count += 1
    return m.group(0).replace(
        '<article class="product-card reveal">',
        f'<article class="product-card reveal" data-code="{code}">',
        1
    )

new_html = pattern.sub(replacer, html)

with open('catalogue.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print(f'updated {count} product cards')
