const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'SalesPlay-Agentic-Demo.html'), 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
assert.equal(scripts.length, 3);
assert(!/<script\s+src=|<link[^>]+rel="stylesheet"|src="assets\//.test(html));
assert(!/\bfetch\s*\(|XMLHttpRequest|WebSocket/.test(scripts.join('\n')));

function boot(denyStorage) {
  const nodes = new Map(), blobs = new Map(), downloads = [], events = new Map(), memory = new Map();
  const node = q => {
    if (!nodes.has(q)) nodes.set(q, {
      innerHTML: '', textContent: '', open: false,
      classList: {add(){}, remove(){}, toggle(){}},
      addEventListener(){}, focus(){},
      showModal(){this.open = true}, close(){this.open = false}
    });
    return nodes.get(q);
  };
  const c = {
    console, Date, Set, Blob,
    document: {
      querySelector: node, querySelectorAll(){return []},
      createElement(tag) {
        assert.equal(tag, 'a');
        return {click(){ downloads.push({name:this.download, blob:blobs.get(this.href)}); }};
      }
    },
    localStorage: {
      getItem(k){if(denyStorage)throw Error('Storage denied');return memory.get(k)||null},
      setItem(k,v){if(denyStorage)throw Error('Storage denied');memory.set(k,v)}
    },
    location: {hash:'#goal'},
    URL: {createObjectURL(blob){const key='blob:'+blobs.size;blobs.set(key,blob);return key}, revokeObjectURL(){}},
    setTimeout(){return 1}, clearTimeout(){}, setInterval(){return 1}, clearInterval(){},
    scrollTo(){}, addEventListener(name, fn){events.set(name, fn)}
  };
  c.window = c;
  vm.createContext(c);
  for (const script of scripts) vm.runInContext(script, c);
  return {c, nodes, downloads, memory, run:code => vm.runInContext(code,c)};
}

(async () => {
  for (const denied of [false,true]) {
    const h = boot(denied);
    assert(h.nodes.get('#main').innerHTML.includes('Find opportunities'));
    h.run("state=E.start(state,D);for(let i=0;i<5;i++)state=E.advance(state,D);state=E.draft(state,'ridgeway',D.accounts)");
    h.run("exportPlay('ridgeway',false)");
    assert.equal(h.downloads.length,0,'Unreviewed exports must be blocked');
    h.run("state=E.review(state,'ridgeway',true);state=E.save(state,'ridgeway');exportPlay('ridgeway',true)");
    assert.equal(h.downloads.length,1);
    assert.equal(h.downloads[0].name,'Ridgeway-Transformers-Agentic-Sales-Play.txt');
    const text = await h.downloads[0].blob.text();
    assert(text.includes('GOAL\n') && text.includes('NEXT ACTION\n') && text.includes('Evidence version: 1.1.1'));
    assert(text.includes('All account findings are fictional.'));
    h.run("state=E.feedback(state,'ridgeway','outsourced','unknown','We buy finished cores.');exportPlay('ridgeway',true)");
    assert.equal(h.downloads.length,1,'Buyer correction must block the old reviewed export');
    h.run('persist();render()');
    assert.equal(h.run('storageFailed'),denied);
    if(denied) assert(h.nodes.get('#main').innerHTML.includes('Browser storage is unavailable'));
    else assert(h.memory.has('salesplay-agentic-customer-v1'));
    h.run("$('#pilot-product').value='';$('#pilot-market').value='North America';$('#pilot-outcome').value='Validate five useful new accounts';savePilotBrief()");
    assert.equal(h.run('state.pilot'),undefined,'An incomplete pilot brief must not be saved');
    assert(h.nodes.get('#pilot-error').textContent.includes('Add your product'));
    h.run("$('#pilot-product').value='<img src=x>';savePilotBrief()");
    assert(h.nodes.get('#dialog-content').innerHTML.includes('&lt;img src=x&gt;'));
    assert(!h.nodes.get('#dialog-content').innerHTML.includes('<img src=x>'));
    if(denied) assert(h.nodes.get('#dialog-content').innerHTML.includes('Available for this session.'));
    h.run('exportPilotBrief()');
    assert.equal(h.downloads.length,2);
    const pilotText=await h.downloads[1].blob.text();
    assert(pilotText.includes('Starting scope: five accounts'));
    assert(pilotText.includes('No pilot request has been submitted.'));
  }
  console.log('PASS Standalone scripts boot without a server or runtime network dependency.');
  console.log('PASS Reviewed export content is complete; unreviewed and stale exports are blocked.');
  console.log('PASS The complete standalone app operates with storage available or denied.');
  console.log('PASS Pilot scoping requires complete inputs, escapes user text, and prepares an unsent brief.');
})().catch(e=>{console.error(e);process.exitCode=1});
