# SalesPlay — agentic future manager demo

[Open the live prototype](https://yswami.github.io/salesplay-agentic/) · [Manager brief (PDF)](https://yswami.github.io/salesplay-agentic/SalesPlay-Agentic-Manager-Brief.pdf) · [Recorded walkthrough (5:31)](https://yswami.github.io/salesplay-agentic/SalesPlay-Agentic-Manager-Walkthrough.mp4)

A separate concept showing how SalesPlay could help a seller pursue a goal, investigate opportunities, and change direction when buyer facts change. The earlier [customer demo](https://yswami.github.io/salesplay-v2/) is preserved in its separate repository.

## Try the journey

1. Start the investigation for Jamie's core-stacking equipment goal.
2. Review Ridgeway, inspect the evidence, then prepare, review, and save a play.
3. Record the sample buyer response: core assembly is outsourced.
4. See Ridgeway excluded, the evidence requirement change, and Evergreen investigated.
5. Review the analyst handoff, apply the sample finding, and validate the next buyer question.
6. Confirm in-house assembly and a capacity need to reach technical review. The earlier Ridgeway play remains in history with export blocked.
7. In Research activity, try the later monitoring update and inspect the proposed pilot.

The in-product **Demo guide** explains the click path. Use the reset icon to restart.

## Review without presenting live

- [Seven-page manager brief](SalesPlay-Agentic-Manager-Brief.pdf): thesis, journey, adaptive behavior, MarketsandMarkets' potential research advantage, feasible architecture, and pilot.
- [Narrated MP4](SalesPlay-Agentic-Manager-Walkthrough.mp4): actual recorded interactions edited into eight chapters, with burned and selectable English captions.
- [Standalone HTML](SalesPlay-Agentic-Manager-Demo.html): download and open locally, with the PDF beside it.
- [Narration](SalesPlay-Agentic-Narration.mp3), [captions](SalesPlay-Agentic-Captions.srt), [script](SalesPlay-Agentic-Script.txt), and [chapters](SalesPlay-Agentic-Chapters.txt).

## Concept boundaries

This is a deterministic local simulation, not live autonomous research. Sellers, accounts, account records, specialist research, analyst findings, and buyer responses are fictional. Editing the goal note does not change the fixture-based research results. Public DOE and LAE sources establish industry and equipment-category context only.

No live AI, entitled MarketsandMarkets research, CRM, contact enrichment, outreach, analyst service, or scheduled monitoring is connected. Browser state stays in this demo's local storage (`salesplay-agentic-manager-v1`). Nothing is submitted to a service. GitHub Pages hosts the public static files.

Existing SalesPlay already describes agent-based monitoring, opportunity discovery, and sales execution. This concept demonstrates an explicit research-to-decision workflow and a research advantage to test; it claims no measured superiority, pipeline, conversion, or revenue gain.

## Source and checks

Plain HTML, CSS, and JavaScript at the repository root. `data.js` holds linked fixtures; `engine.js` holds state transitions; `app.js` renders the experience. No build or external runtime service is needed. `build-standalone.py` rebuilds the single-file version.

```sh
node tests/test-engine.cjs
node tests/test-render.cjs
node tests/test-standalone.cjs
```

The workflow and rendering suites cover buyer-led replanning, evidence versions, review invalidation, specialist gating, malformed inputs, and denied storage. The standalone suite verifies boot and guarded export generation. Desktop, laptop, and phone layouts were reviewed; all seven PDF pages were rendered and inspected. Direct file-mode browser automation and completed in-app browser downloads were unavailable, so those behaviors were checked in the standalone harness. This is not a customer usability study or accessibility certification.

Voice narration: authorized local storyteller profile, seed 7, natural tempo 1.0. Icons: Phosphor, MIT license in `assets/LICENSE-phosphor.txt`. Independent concept by Yogendra Swami.
