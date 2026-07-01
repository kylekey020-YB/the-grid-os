# Commerce Validation Pipeline v2.0

A repeatable, gate-by-gate workflow for evaluating whether a commerce
opportunity is worth pursuing. Run manually. Document every gate. Do not
skip to the decision.

**Version history**
- v1.0 — original 7-gate pipeline (Prospector through Decision)
- v2.0 — added Operator Fit as a formal gate after records 001 and 002 both
  parked on operator-mismatch grounds; it was the deciding factor in both
  cases and deserved its own explicit checkpoint

---

## Gate 1 — Prospector

*Find the opportunity. State it clearly before evaluating it.*

Questions to answer:
- What is the product category or niche?
- Where did this opportunity surface? (trend data, community, pain point, etc.)
- One-sentence summary of the hypothesis: "There is a demand for X among Y
  customers who currently struggle to find it because Z."

Exit criteria: hypothesis is written out in plain language. No "etc." — be
specific about who the customer is.

---

## Gate 2 — Demand Evidence

*Confirm real, measurable demand exists. Gut feeling is not evidence.*

Questions to answer:
- Search volume: what are the primary keywords, what is monthly search volume?
- Community evidence: are there Reddit threads, Facebook groups, YouTube
  channels, or forums where people actively discuss this problem?
- Purchase intent signals: are people asking "where to buy," posting wish
  lists, or complaining about current options?
- Trend direction: is demand growing, stable, or declining?

Exit criteria: at least two independent demand signals documented with
sources. "People want this" must be supported by observable behavior.

---

## Gate 3 — Competition

*Map who already serves this demand and how hard they are to compete with.*

Questions to answer:
- Who are the top 3–5 players? (Amazon, DTC brands, niche retailers)
- What are their price points and positioning?
- Where are the gaps? (underserved segments, unmet needs, poor reviews)
- Is this a winner-take-all market or does it fragment naturally into niches?
- Can we find a position that is not "cheaper than Amazon"?

Exit criteria: a clear competitive gap identified, OR a clear note that no
defensible position exists (which leads to KILLED or PARKED).

---

## Gate 4 — Supplier Reality

*Can we actually source a product at acceptable quality and economics?*

Questions to answer:
- Where does product currently come from? (domestic, overseas, private-label,
  resale, manufactured)
- Are there MOQ requirements that exceed realistic starting capital?
- Is the supplier landscape competitive (many options) or concentrated (few
  options with leverage over you)?
- What does a sample process look like? What is lead time?
- Is there a realistic path to differentiation (custom spec, branding,
  bundling) or is this purely commodity resale?

Exit criteria: at least one plausible sourcing path with rough economics.

---

## Gate 5 — Margins

*Do the numbers work after all real costs?*

Build a simple unit economics model:
- Selling price (what the market actually pays, not what you wish)
- COGS (product + packaging + inbound shipping)
- Platform fees (Amazon FBA, Shopify payments, etc.)
- Outbound shipping (if applicable)
- Returns reserve (5–10% for physical goods is conservative and honest)
- Advertising / CAC allocation (see Gate 6)
- **Gross margin target: 40%+ preferred; below 30% is very hard to sustain**

Exit criteria: written unit economics with identified selling price and
calculated gross margin. Do not proceed if margins require everything to go
right.

---

## Gate 6 — Customer Acquisition

*How do customers find this product, and what does it realistically cost?*

Questions to answer:
- What is the primary discovery channel? (SEO, paid ads, social, word-of-mouth,
  marketplace organic, influencers, community)
- What does CAC look like in this channel? (research benchmarks; do not guess)
- Is the acquisition channel a fit for the operator's actual skills and
  bandwidth? (see Gate 7)
- Is there a channel that does NOT require ongoing content creation, paid ad
  management, or influencer relationships — if those are not operator strengths?
- What does the retention picture look like? (one-time purchase vs. repeat)

Exit criteria: primary acquisition channel named, rough CAC estimated,
channel-operator fit assessed honestly.

---

## Gate 7 — Operator Fit  *(added v2.0)*

*Does this opportunity match what the current operator is actually good at
and willing to do on an ongoing basis?*

This gate was added after two consecutive records (001 and 002) showed that
operator mismatch was the real reason to park an otherwise reasonable
opportunity. It deserves its own explicit checkpoint.

Operator strengths (document per person; below is the current operator profile):
- Systems design and process architecture
- Logistics and operations coordination
- Research and evidence synthesis
- AI-workflow integration and tooling
- Analytical writing and documentation

Operator limitations (be honest; these are not permanent, just current):
- Content-first branding (ongoing visual content, aesthetic curation, style)
- Social media presence building
- Influencer relationship management
- High-touch creative direction

Questions to answer:
- Does the ongoing operational requirement of this business match operator
  strengths, or does it require sustained effort in operator weakness areas?
- If there is a mismatch, is there a realistic path to filling the gap?
  (partner, hire, tool) — or is it a load-bearing requirement with no workaround?
- Would the operator still want to run this business 18 months from now, doing
  the actual day-to-day work it requires?

Exit criteria: honest assessment written out. "Yes, I could learn it" is not
operator fit — it is wishful thinking. Document the real answer.

---

## Gate 8 — Decision

*One of three outcomes. No ambiguous verdicts.*

**GO**
All gates pass. Opportunity is viable, margins work, acquisition channel is
clear and fits the operator, sourcing is feasible. Next action is a specific
first step (order samples, build landing page, etc.).

**PARKED**
The opportunity has real merit in some gates but a specific, named problem in
one or more gates makes it wrong to pursue now. Document:
- What specifically failed
- What condition would need to change to revisit
- Whether that condition is plausible (if not plausible, consider KILLED)

**KILLED**
The opportunity is not viable and that is unlikely to change. The market is too
small, the competition is impenetrable, margins are structurally impossible,
or the operator mismatch is permanent. Do not revisit.

---

## Gate 9 — Validation Record

*Write the record. File it. Commit it.*

A record is not optional. The research just done has value only if it is
preserved. Fill out a record file using the template structure from the
existing records. Add it to the README index. Commit.

The record is the output of the pipeline. Without it, the pipeline did not run.

---

## Notes on discipline

- Gates must be run in order. Skipping to margins before confirming demand
  produces confident lies.
- Each gate must produce written output, not a mental note.
- A PARKED conclusion reached honestly is a successful pipeline run.
- Do not conflate "interesting" with "validated." Many interesting things
  are not viable businesses.
- The pipeline does not produce certainty. It produces an honest, documented
  assessment that is better than guessing.
