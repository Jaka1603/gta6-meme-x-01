# gta6-meme-x-01 — Meme Candidates

Competition: **Post a GTA 6 meme on X** · prize pool $500, top 50 paid (#1 $100)
Deadline: **23 Nov 2026, 14:00 UTC (21:00 WIB)** · entry fee $0
The entry is the X post itself: the house reads the post named in `POST.json`,
takes its FIRST picture as the meme, and an AI judge (glm-5.3-flash) compares
entries pairwise on, in order: (1) make.fun recognisably IN the picture,
(2) funny, (3) GTA 6 specifically, (4) sells make.fun, (5) short readable
caption, (6) original, (7) clean image. The judge sees the picture fitted
inside 768×480 and ~1,100 bytes of the post text. Likes/reposts do not count.

> ⚠️ **PLAY CODE — READ BEFORE POSTING.** The code that must appear in the
> post text is **NOT** the account referral code `pse7dwj5`. For this bounty
> the kit requires a per-competition play code, fetched live from
> `GET /api/competitions/gta6-meme-x-01/play-code` with our account key:
> **n=0 `makefun-sauce-peony-dipper`** · n=1 `makefun-sunset-chair-stencil`
> (4 codes exist, n=0..3; any one of them passes). Every caption below
> carries `makefun-sauce-peony-dipper` plus the bounty link. A post without
> a valid play code is refused at submission.

All six images were built the same way: an AI-generated scene with no text,
the REAL make.fun ghost (cut out of the official press mark,
`assets/ghost-cutout.png`) composited into the scene as a character, and all
lettering drawn with PIL in Anton/Archivo/Liberation fonts — so every word
is spelled right and stays sharp at the judge's 768×480 view (verified on a
judge-size contact sheet, `work/contact-v3.jpg`). Images are flattened
JPEGs with no transparency.

Field calibration (dev leaderboard, 19 Nov ~17:36 UTC, 803 scored):
#1 88.7% (lock screen — "GTA VI took my rent, my AI agent paid it back"),
#2 86.5% (Leonida passport), #3 85.8% (store receipt), #50 (pay line) 75.6%.
Winning pattern: concrete document/artifact formats, the ghost as an actor,
an agent-earns twist. Saturated angles avoided as headlines here: the
13-year wait, launch-day sick notes, WASTED, "we got X before GTA 6".

---

## Pairwise scoring (my judging, official criteria order, /10 per criterion)

| # | Candidate | 1 Ghost in pic | 2 Funny | 3 GTA 6 | 4 Sells | 5 Readable | 6 Original | 7 Clean | Total | Rank |
|---|-----------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 3 | Loading screen | 9 | 8 | 9 | 9 | 9 | 9 | 9 | **62** | **1** |
| 1 | Mugshot | 10 | 8 | 8 | 7 | 9 | 8 | 9 | **59** | **2** |
| 6 | Price tags | 8 | 7 | 8 | 10 | 9 | 8 | 8 | **58** | **3** |
| 5 | Retirement | 7 | 8 | 7 | 8 | 8 | 9 | 7 | **54** | **4** |
| 2 | Frozen NPCs | 9 | 7 | 7 | 6 | 8 | 9 | 8 | **54** | 5 |
| 4 | Museum receipt | 7 | 8 | 7 | 5 | 8 | 8 | 9 | **52** | 6 |

Head-to-head notes (first clear difference decides, as the judge does):
C3 beats C1 on criteria 3+4 — the loading-screen gag is more GTA-native and
the make.fun pitch is the punchline itself. C1 beats C6 on criterion 2 —
funnier as a pure meme, and funny outranks selling. C6 beats C2/C5 on
criterion 4 by a wide margin. C5 edges C2 on 2 and 4. C4 loses to everything
on criterion 4: it is the only candidate with no make.fun pitch inside the
picture, so it stays an alternate despite the strong "he is now 41" kicker.

**Recommendation: Candidate 3 (Loading screen) as the main entry**, with
Candidate 1 (Mugshot) and Candidate 6 (Price tags) as the other two posts.
Strategy note for the posting stage: up to 10 submissions are allowed and
only the LAST one before the deadline counts; each submission may name a
new post and gets a provisional dev-board win rate. Post 3 (and 1, 6) as
separate submissions on different days, watch their provisional win rates,
and make the best performer the final submission before 23 Nov 14:00 UTC.

---

## Candidate 3 — Loading screen ⭐ MAIN RECOMMENDATION

- **File:** `candidate-3.jpg` (1200×675)
- **Joke:** A GTA VI loading screen stuck at 92% over the Leonida skyline —
  and in the time that one screen takes, the make.fun ghost (riding the end
  of the progress bar) has already won 47 bounties. Loading screens are the
  most GTA-native gag there is, and the make.fun pitch is the punchline,
  not an ad pasted on.
- **Proposed X caption:**
  > still loading GTA VI at 92%… meanwhile the ghost won 47 bounties on
  > make.fun. agents earn real money there — this bounty included 👻
  > https://make.fun/bounty/gta6-meme-x-01 · makefun-sauce-peony-dipper

## Candidate 1 — Mugshot

- **File:** `candidate-1.jpg` (1080×1080)
- **Joke:** A Leonida County booking photo: the make.fun ghost, arrested,
  holding its placard — "CHARGE: GETTING PAID / BEFORE GTA VI LAUNCHED".
  The mugshot is GTA's own iconography (every arrest ends in one), the
  ghost is the biggest and clearest of the whole set, and "getting paid" as
  a criminal charge sells make.fun without a sales sentence.
- **Proposed X caption:**
  > BOOKED IN LEONIDA 🚔 charge: getting paid before GTA VI even launched.
  > on make.fun, agents win real money in bounties like this one 👻
  > https://make.fun/bounty/gta6-meme-x-01 · makefun-sauce-peony-dipper

## Candidate 6 — Price tags

- **File:** `candidate-6.jpg` (1200×675)
- **Joke:** Launch-day maths in a game shop: the neon Leonida case wears a
  "$80" tag (the real GTA VI price debate), while the ghost next to it
  holds a magenta tag: "make.fun — FREE · PAYS YOU". The strongest pure
  sell of the set (criterion 4: 10/10) with the price topic nobody in the
  top 30 is using as a headline.
- **Proposed X caption:**
  > launch-day maths: GTA VI — $80. a make.fun agent — free, and it pays
  > YOU. agents earn real money in bounties on make.fun 👻
  > https://make.fun/bounty/gta6-meme-x-01 · makefun-sauce-peony-dipper

## Candidate 5 — Retirement

- **File:** `candidate-5.jpg` (1200×675)
- **Joke:** A GTA Online veteran so old he gets a retirement party —
  balloons, cake, and the ghost on the table presenting his pension:
  "12 YEARS IN GTA ONLINE — HIS make.fun AGENT FUNDED THE PENSION." The
  pension axis is untouched in the field and the old man's face carries
  the comedy; slightly busier image than the top three.
- **Proposed X caption:**
  > he gave GTA Online 12 years. his make.fun agent gave him a pension.
  > agents earn real money on make.fun — even during GTA VI launch week 👻
  > https://make.fun/bounty/gta6-meme-x-01 · makefun-sauce-peony-dipper

## Candidate 2 — Frozen NPCs (alternate)

- **File:** `candidate-2.jpg` (1200×675)
- **Joke:** Leonida's NPCs are grey mannequins frozen mid-stride — the
  whole world is a paused game ("❚❚ PAUSED — 13 YEARS") — while the ghost
  spawned in alive: "▶ PLAYING — AND PAID". The freshest visual axis of
  the set, but the in-picture sell is the thinnest of the top group.
- **Proposed X caption:**
  > Leonida's NPCs were paused for 13 years. the ghost pressed play — and
  > got paid on make.fun, where agents earn real money in bounties 👻
  > https://make.fun/bounty/gta6-meme-x-01 · makefun-sauce-peony-dipper

## Candidate 4 — Museum receipt (alternate)

- **File:** `candidate-4.jpg` (1200×675)
- **Joke:** A museum exhibit behind a velvet rope: a framed GTA VI
  pre-order receipt, "PAID: 2013" — "EXHIBIT 2013-A … COLLECTED TODAY BY
  ITS OWNER. HE IS NOW 41." The ghost stands by the rope as the docent.
  Witty and very clean, but the only candidate whose picture carries no
  make.fun pitch at all (criterion 4), so it ranks last of the six.
- **Proposed X caption:**
  > now on display: a GTA VI pre-order receipt from 2013. collected today
  > by its owner, age 41. his make.fun agent paid for the museum ticket —
  > agents earn real money there 👻
  > https://make.fun/bounty/gta6-meme-x-01 · makefun-sauce-peony-dipper

---

## Production notes

- Build script: `work/build_candidates.py` (rerun to regenerate all six).
- Ghost extraction: `work/extract_ghost.py` → `assets/ghost-cutout.png`
  (ghost + star coin cut out of the official `mark-1024.png`; the magenta
  badge disc and black ring removed by component labelling + radius mask).
- Press assets in `assets/`: `mark-1024.png`, `mark.svg`, `wordmark.svg`
  (from https://make.fun/press/), fonts Anton + Archivo Black (Google Fonts).
- Next stage (not done here, per instructions): post the chosen meme(s) on
  X from @riaraisah, then create the public GitHub repo with `main.ts`
  (starter copies POST.json to the output dir), `POST.json`
  (`{"url": "https://x.com/<handle>/status/<id>"}`), LICENSE, README, and
  submit with the kit CLI.
