# SalesPlay — agentic customer demonstration

[Open SalesPlay](https://yswami.github.io/salesplay-agentic/?v=customer-1#goal) · [Standalone customer version](SalesPlay-Agentic-Demo.html)

A sample seller workspace: set a growth goal, let agents investigate accounts, review the evidence, prepare a conversation, and adapt when buyer feedback changes the fit.

## Customer sharing materials

[Customer overview - 5-page PDF](SalesPlay-Customer-Overview.pdf) · [Customer walkthrough - 4:00 video](SalesPlay-Customer-Walkthrough.mp4) · [Captions](SalesPlay-Customer-Captions.srt)

These materials match the current customer presentation. The video records actual interactions, edited into seven narrated chapters. Its accounts, research findings, buyer responses, and agent actions use the same controlled simulation as the prototype.

## Customer presentation

The product flow focuses on the seller's work. It contains no manager brief, presentation guide, future-state labels, or internal review instructions. A concise Sample data control opens the disclosure. Evidence records retain their public, fictional, and simulated provenance.

The key moment: Ridgeway says it outsources core assembly. SalesPlay excludes that account for this equipment, changes the search requirement, investigates Evergreen, and blocks reuse of the old reviewed message. Analyst and buyer validation remain distinct. Plan a pilot prepares an editable local brief for one product, one market, and five accounts; it does not submit a request.

## Scope

This is a deterministic simulation using fictional accounts and sample findings. It does not run live AI, licensed research, CRM, outreach, analyst requests, or background monitoring. Editing the example goal does not run an open-ended search. Public DOE and LAE sources establish industry and category context only. No measured research or commercial advantage is claimed.

Customer state uses `salesplay-agentic-customer-v1`. The original manager state uses its own key and is unaffected. The earlier [SalesPlay customer demo](https://yswami.github.io/salesplay-v2/) and its repository are unchanged.

## Internal manager material — separate from the customer flow

These original review artifacts are retained and describe the earlier manager presentation:

- [Original manager prototype](SalesPlay-Agentic-Manager-Demo.html)
- [Seven-page manager brief](SalesPlay-Agentic-Manager-Brief.pdf)
- [Original recorded manager walkthrough (5:31)](SalesPlay-Agentic-Manager-Walkthrough.mp4)
- [Narration](SalesPlay-Agentic-Narration.mp3), [captions](SalesPlay-Agentic-Captions.srt), [script](SalesPlay-Agentic-Script.txt), and [chapters](SalesPlay-Agentic-Chapters.txt)

The original manager recording is unchanged. Use the customer walkthrough above for the current customer presentation.

## Implementation and verification

Plain HTML, CSS, and JavaScript. `data.js` holds scenario fixtures, `engine.js` owns transitions and evidence versions, and `app.js` renders the workspace. `build-standalone.py` creates the self-contained customer HTML.

```sh
node tests/test-engine.cjs
node tests/test-render.cjs
node tests/test-standalone.cjs
```

Checks cover replanning, specialist gating, review invalidation, source history, denied storage, guarded exports, and pilot brief validation. The customer journey was exercised in the browser, including buyer correction, stale export blocking, required pilot fields, refresh, reset, and dialog Escape. Desktop and 390px phone layouts were inspected. This is not a customer usability study or accessibility certification. Direct file-mode automation and completed in-app browser downloads were unavailable; standalone boot and export content were checked in the harness.

Icons: Phosphor, MIT license in `assets/LICENSE-phosphor.txt`. Independent prototype by Yogendra Swami.
