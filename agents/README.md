# HustleQuest Compliance Agents

This directory contains **manual compliance task prompts** (“agents”) for recurring governance work.

These are intentionally human-in-the-loop workflows that can be executed by:
- a team member,
- an internal AI assistant,
- or a contractor following the same prompt and evidence standard.

> Not legal advice. Outputs from these agents are draft operational artifacts and must be reviewed by counsel and leadership before production decisions.

## How to use

1. Pick the agent file matching the task.
2. Provide the agent with repository and environment access.
3. Ask it to execute the `Task Prompt` exactly.
4. Require artifacts in `Required Deliverables`.
5. Save outputs in `/compliance/evidence/<yyyy-mm-dd>/<agent-name>/`.

## Standard evidence format

Every agent run should produce:
- `summary.md` — executive summary + pass/fail by control.
- `findings.csv` — actionable issues with severity and owner.
- `artifacts/` — screenshots, logs, command output, policy diffs.
- `decision-log.md` — accepted risks and deferrals.

## Severity rubric

- **P0 Critical**: Legal exposure, unsafe user impact, payment/security breakage.
- **P1 High**: Non-trivial compliance gap likely to block launch.
- **P2 Medium**: Important but does not block launch if tracked.
- **P3 Low**: Quality improvements and clarifications.

## Agent index

- `legal-policy-auditor.md`
- `privacy-dsr-operator.md`
- `trust-safety-reviewer.md`
- `payments-webhook-auditor.md`
- `security-hardening-reviewer.md`
- `accessibility-wcag-reviewer.md`
- `release-gatekeeper.md`
- `build-hustlequest-production-v3.md`
- `sprite-ui-implementer.md`

## Default operating assumptions

Unless instructed otherwise:
- Product is a **listing/discovery marketplace** (not service-payment escrow).
- Posting/payment actors are **18+ only**.
- Crypto is **feature-flagged off** by default.
- No dark patterns, no unsupported earnings claims.
