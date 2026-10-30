# Claude Certified Architect – Foundations: Study Guide

> **Note:** the Exam Guide this is based on is marked Anthropic "Confidential Need to Know (NTK).". This guide paraphrases the structure only and does not reproduce either the sample questions or confidential information.

> This guide is built from the public exam page. The official **Exam Guide (PDF)** lists the domains and weightings, and it is the authority. <mark>Recheck it before you start, and again when the November 17, 2026 update lands. If you test on December 7, 2026 or later, use the updated guide.</mark>

## 1. Exam at a glance

| Item | Detail |
|---|---|
| Exam | Claude Certified Architect – Foundations Certification Examination |
| Cost | $125 (per the exam page) |
| Covers | Claude Code, Claude Agent SDK, Claude API, Model Context Protocol (MCP) |
| Focus | Making informed **tradeoff decisions** when implementing real-world solutions with Claude |
| Format | Multiple choice: one correct answer and three distractors. Unanswered questions score as incorrect; there is no guessing penalty |
| Passing score | 720 on a scaled score of 100–1,000 |
| Scenarios | 4 scenarios drawn at random from a pool of 6 |
| Length | Not stated in the Exam Guide. Check the [Exam Policy](https://anthropic-partners.skilljar.com/claude-certified-architect-foundations-certification) |
| Prerequisites | Completed Claude Code courses from the Anthropic Academy; working familiarity with the Agent SDK; hands-on experience building with Claude Code, the Agent SDK, the Anthropic API, and MCP (per the private learning path) |
| Target audience | Lead and advanced engineers, architects, technology consultants, and teams in intelligent automation, cloud, and data (per the private learning path) |

**Source:** [Exam page](https://anthropic-partners.skilljar.com/claude-certified-architect-foundations-certification)

### Content domains

| Domain | Weight | Task statements | Covered in |
|---|---|---|---|
| 1. Agentic Architecture & Orchestration | 27% | 7 (TS1.1–1.7) | 3.2 Agent SDK, 3.1 Claude API (loop basics) |
| 2. Tool Design & MCP Integration | 18% | 5 (TS2.1–2.5) | 3.3 MCP, 3.1 Claude API (tool use) |
| 3. Claude Code Configuration & Workflows | 20% | 6 (TS3.1–3.6) | 3.4 Claude Code |
| 4. Prompt Engineering & Structured Output | 20% | 6 (TS4.1–4.6) | 3.5 |
| 5. Context Management & Reliability | 15% | 6 (TS5.1–5.6) | 3.6 |

Sources: the Exam Guide PDF (weights, task statements, scenarios) and the private learning path description. The Exam Guide is Version 0.1, dated Feb 10 2025. <mark>The exam page says an updated guide arrives November 17, 2026,</mark> so check which version applies to your exam date.

## 2. Study plan (about 4–6 weeks, roughly 5–8 hours a week)

| Week | Focus | Output |
|---|---|---|
| 1 | Read the Exam Guide. Take [Claude 101](https://anthropic.skilljar.com/claude-101). Write down every topic in the guide. | Topic checklist with a confidence rating (1–5) for each |
| 2 | Claude API: messages, models, prompting, parameters, streaming, tool use | Small script that calls the API and makes a tool call |
| 3 | Claude Agent SDK: agent loops, tools, sessions, permissions | Simple agent with two or three custom tools |
| 4 | MCP: servers, tools, resources, transports, client integration | A working MCP server connected to a client |
| 5 | Claude Code: workflows, settings, hooks, subagents, permissions | Repo configured with CLAUDE.md, settings, and one hook |
| 6 | Prompt engineering and structured output (3.5), context management and reliability (3.6), then review weak spots and tradeoff drills (Section 4). | Written answers to every tradeoff prompt in this guide |

Weight your time by the domain percentages above. Domain 1 (27%) is the largest, and Domains 3 and 4 (20% each) come next. Spend extra time on the areas you rated lowest.

## 3. Topic breakdown

### 3.1 Claude API
- Message structure: system prompt, user and assistant turns, content blocks
- Model choice: capability vs. cost vs. latency
- Key parameters: `max_tokens`, temperature, stop sequences
- Streaming responses and handling partial output
- Tool use: defining tools with JSON schema, the tool-call loop, returning results
- Errors, rate limits, and retries
- Token counting and cost control (prompt caching, shorter context, batching)

**Practice:** Write a tool-use loop that stops after N iterations and returns a clear error if the model never finishes.

### 3.2 Claude Agent SDK
- The agent loop: model call, tool execution, observation, repeat
- Defining tools and their descriptions (the model chooses tools by reading these)
- Context management across long tasks
- Permissions and guardrails: what the agent may do without asking
- Subagents: when to split work and when one agent is enough

**Practice:** Build an agent that answers questions about a folder of files, with read-only permissions. Then add a write tool and gate it behind an approval step.

### 3.3 Model Context Protocol (MCP)
- Architecture: host, client, server
- Primitives: tools, resources, prompts
- Transports (for example stdio vs. HTTP)
- When to build an MCP server vs. a plain tool in code
- Security: scope, authentication, trust boundaries for third-party servers

**Practice:** Expose one internal-style data source (a CSV or SQLite file) as an MCP server with two tools and one resource.

### 3.4 Claude Code
- Working in a repo: CLAUDE.md, project vs. user settings
- Permission modes and allow/deny rules
- Hooks: when they fire and what they can block
- Subagents and slash commands
- Using Claude Code safely in CI or on shared repos

**Practice:** Add a CLAUDE.md, a permissions rule, and a hook that runs a formatter after edits.

### 3.5 Prompt Engineering & Structured Output (Domain 4)
- Writing clear system prompts: role, constraints, examples, and output format
- Few-shot examples and when they help
- Requesting structured output (JSON schema, tool-based output) and validating it
- Handling malformed or refused output: retry, repair, or fail with a clear error
- Prompt iteration: changing one variable at a time and measuring the result

**Practice:** Take one free-text task (for example, extracting invoice fields) and make it return validated JSON. Measure how often it fails before and after your changes.

### 3.6 Context Management & Reliability (Domain 5)
- Context budget: what goes in the prompt, what gets summarized, and what gets retrieved
- Long sessions: compaction, summaries, and state kept outside the context window
- Reliability: timeouts, retries with backoff, idempotent tool calls, and partial-failure recovery
- Detecting and recovering from bad model output in multi-step tasks
- Logging and evaluation so failures are visible

**Practice:** Give an agent a task that spans more context than you want in one prompt. Store progress in a file and resume after a simulated crash.

### 3.7 Task statement checklist

Rate yourself 1–5 on each task statement. Titles are paraphrased from the Exam Guide.

- [ ] TS1.1 Agentic loops: continue on `tool_use`, stop on `end_turn`, and avoid unreliable stop signals
- [ ] TS1.2 Coordinator-subagent orchestration and research coverage
- [ ] TS1.3 Subagent invocation, explicit context passing, and parallel spawning
- [ ] TS1.4 Multi-step workflows: programmatic enforcement and structured handoffs
- [ ] TS1.5 Agent SDK hooks: normalizing tool results and blocking policy violations
- [ ] TS1.6 Task decomposition: prompt chaining vs. adaptive decomposition
- [ ] TS1.7 Session state: resumption, forking, and when to start fresh
- [ ] TS2.1 Tool descriptions and boundaries that prevent misrouting
- [ ] TS2.2 Structured MCP error responses (category, retryable flag)
- [ ] TS2.3 Tool distribution per agent and `tool_choice` options
- [ ] TS2.4 MCP config scope: `.mcp.json` vs. `~/.claude.json`, and env var expansion
- [ ] TS2.5 Built-in tools: Grep, Glob, Read, Write, Edit, and fallbacks
- [ ] TS3.1 CLAUDE.md hierarchy, `@import`, and `.claude/rules/`
- [ ] TS3.2 Custom slash commands and skills (`context: fork`, `allowed-tools`, `argument-hint`)
- [ ] TS3.3 Path-specific rules with glob `paths` frontmatter
- [ ] TS3.4 Plan mode vs. direct execution
- [ ] TS3.5 Iterative refinement: examples, test-driven iteration, interview pattern
- [ ] TS3.6 CI/CD: `-p`, `--output-format json`, `--json-schema`, and independent review
- [ ] TS4.1 Explicit review criteria that reduce false positives
- [ ] TS4.2 Few-shot examples for ambiguous cases and output format
- [ ] TS4.3 Structured output via tool use and JSON schemas (nullable fields)
- [ ] TS4.4 Validation, retry with error feedback, and when retries cannot help
- [ ] TS4.5 Message Batches API: when to use it, `custom_id`, and failure handling
- [ ] TS4.6 Multi-instance and multi-pass review architectures
- [ ] TS5.1 Preserving facts in long interactions (case-facts block, trimming tool output)
- [ ] TS5.2 Escalation criteria and ambiguity resolution
- [ ] TS5.3 Error propagation across multi-agent systems
- [ ] TS5.4 Context management in large codebase exploration (scratchpads, manifests)
- [ ] TS5.5 Human review routing and confidence calibration
- [ ] TS5.6 Provenance: claim-source mappings, conflicts, and dates

## 4. Tradeoff drills

The exam is framed around tradeoffs, so practice explaining *why*. For each prompt, write a short answer (3–5 sentences) that names the tradeoff and a condition under which you would choose the other option.

1. A chatbot answers from a fixed FAQ. Use a plain API call with the FAQ in the prompt, or build an agent with search tools?
2. A workflow needs data from five internal systems. Build five custom tools in one agent, or one MCP server per system?
3. A nightly job summarizes 10,000 documents. Real-time API calls, or the Batch API?
4. An agent must edit production config. Let it act freely, add a permission gate, or give it a read-only tool and a human approval step?
5. A team wants Claude Code to follow company conventions. Put rules in CLAUDE.md, in settings, in hooks, or in a shared MCP server?
6. Long documents exceed the context you want to spend. Summarize first, retrieve relevant chunks, or split the task across subagents?

## 5. Course path (free)

| Order | Course | Why |
|---|---|---|
| 1 | [Claude 101](https://anthropic.skilljar.com/claude-101) | Foundations |
| 2 | Building with Claude courses in the [Claude Academy catalog](https://academy.claude.com/courses) | API, prompting, tool use |
| 3 | [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action) | Claude Code workflows |
| 4 | Model Context Protocol courses in the Academy catalog | MCP |
| 5 | Exam prep courses linked from the [exam page](https://anthropic-partners.skilljar.com/claude-certified-architect-foundations-certification) | Exam-specific prep |

<mark>Confirm current titles in the catalog</mark>.

## 6. Final-week checklist

- [ ] I have read the current Exam Guide PDF and rated myself on every listed topic
- [ ] I have completed the Claude Code courses from the Anthropic Academy (a stated prerequisite)
- [ ] I have built at least one small project with the API, the Agent SDK, MCP, and Claude Code
- [ ] I can explain each tradeoff in Section 4 without notes
- [ ] I have completed every task statement in Section 3.7 at a 4 or higher
- [ ] I have completed the practice exam (the link is provided separately by Anthropic)
- [ ] I know the exam policy: ID requirements, rescheduling, retake rules
- [ ] I have checked my exam date against the updated guide (November 17, 2026 update)
- [ ] My test setup works (see the "Computer and Network Setup" page linked from the exam page)

## 7. Sources

- [Exam page](https://anthropic-partners.skilljar.com/claude-certified-architect-foundations-certification)
- [Claude 101](https://anthropic.skilljar.com/claude-101)
- [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action)
- [Claude Academy courses](https://academy.claude.com/courses)
- Private learning path (domains and prerequisites)
- Claude Certified Architect – Foundations Exam Guide, Version 0.1 (Feb 10 2025)
