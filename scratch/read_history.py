import json

transcript_path = r"C:\Users\에스에스브이\.gemini\antigravity\brain\d5248120-6c17-42e4-a6c2-ac9b5fd3d6b4\.system_generated\logs\transcript.jsonl"
out_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\scratch\recent_transcript.txt"

matches = []

with open(transcript_path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            step = json.loads(line.strip())
            content = step.get("content", "")
            source = step.get("source")
            step_idx = step.get("step_index")
            
            if "pdf" in content.lower() or "tongsin" in content.lower() or "이름" in content or "네가" in content or "폴더" in content:
                matches.append((step_idx, source, content))
        except Exception as e:
            pass

with open(out_path, "w", encoding="utf-8") as out:
    out.write(f"Found {len(matches)} matches:\n\n")
    for idx, source, content in matches:
        out.write(f"=== Step {idx} ({source}) ===\n")
        out.write(content)
        out.write("\n\n")

print("Search matches written to recent_transcript.txt")
