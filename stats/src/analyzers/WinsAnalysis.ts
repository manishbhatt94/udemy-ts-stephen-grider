import { MatchResult } from "../MatchResult";
import { MatchData } from "../MathData";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      }
      if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }
    return `${this.team} won ${wins} games`;
  }
}
