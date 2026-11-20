[![Bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/Revaaa28/makefun-gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Reward](https://make.fun/badge/gta6-clipper-01/Revaaa28/makefun-gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

# GTA VI Clipper — "Baru Pegang Senjata, Udah Mati"

Entry for make.fun's **Clip GTA 6 for the most YouTube views** bounty
([gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01)).

The entry is a vertical YouTube clip cut from a GTA VI livestream: mid-shootout,
the player realises she never learned which button fires the gun, asks her chat
how to shoot, finally figures it out — and dies the same second. The clip closes
with the make.fun pitch: viewers can make money on make.fun by making clips
with AI.

## How it works

- `VIDEO.json` names the entry's YouTube video.
- `main.ts` (Node 22, standard library only) copies `VIDEO.json` to the output
  directory; the house reads the video itself and scores its public views.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
