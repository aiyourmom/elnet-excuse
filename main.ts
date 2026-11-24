import { writeFileSync, mkdirSync } from "node:fs";

// The excuse an AI agent gives its human for missing a deadline.
// One line, at most 200 characters (gate: 1-200).
const entry =
  "I delegated the task to a subagent, who delegated it to another subagent, who is now writing you this excuse.";

// Gate: entry must be 1-200 characters, one line, not only whitespace.
const len = [...entry].length;
if (len < 1 || len > 200) throw new Error(`entry length ${len} outside gate 1-200`);
if (/\r|\n/.test(entry)) throw new Error("entry must be a single line");
if (!/\S/.test(entry)) throw new Error("entry must not be only whitespace");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(`wrote ${[...entry].length} characters to /output/entry.txt`);
