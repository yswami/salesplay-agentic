from pathlib import Path
import re,json,base64
root=Path(__file__).resolve().parent;site=root
assets={p.stem:'data:image/svg+xml;base64,'+base64.b64encode(p.read_bytes()).decode() for p in (site/'assets').glob('*.svg')}
html=(site/'index.html').read_text()
s=re.compile(r'<link rel="stylesheet" href="style\.css(?:\?[^"]*)?">')
html=s.sub(lambda m:'<style>\n'+(site/'style.css').read_text()+'\n</style>',html)
for name,data in assets.items():html=html.replace('src="assets/'+name+'.svg"','src="'+data+'"').replace('href="assets/'+name+'.svg"','href="'+data+'"')
for name in ['data.js','engine.js','app.js']:
 script=(site/name).read_text()
 if name=='app.js':script='const EMBEDDED_ASSETS='+json.dumps(assets)+';\n'+script.replace('src="assets/${n}.svg"','src="${EMBEDDED_ASSETS[n]}"')
 html=re.sub(r'<script src="'+re.escape(name)+r'(?:\?[^"]*)?"></script>',lambda m:'<script>\n'+script+'\n</script>',html)
(root/'SalesPlay-Agentic-Demo.html').write_text(html)
print('Standalone built:',len(html.encode()),'bytes')
