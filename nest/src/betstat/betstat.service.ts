import { Injectable } from '@nestjs/common';
import { launch } from "puppeteer"


@Injectable()
export class BetstatService {

  // @InjectRepository(Betstat)

  // repo = getRepository(Betstat);

  // place holder for the data
  matches = []
  users = []
  scrapedMoreDetailed = []

  URL_FS = "https://www.flashscore.co.uk"

  async scrapeProduct() {
    const browser = await launch({ headless: false })
    const page = await browser.newPage()

    await page.goto(this.URL_FS)

    // Leagues TODO
    // const leagues = await page.$$eval("span.event__title--name", (res) =>
    //   res.map((el) => el.getAttribute("title")),
    // );
    // const league = await page.$$eval("span.description__country > a", (res) => res.map((el) => el.innerHTML))


    // home vs away
    const home = await page.$$eval(".event__participant--home", (res) =>
      res.map((el) => el.textContent)
    )

    const away = await page.$$eval(".event__participant--away", (res) =>
      res.map((el) => el.textContent)
    )

    
    const notSplittedIds = await page.$$eval(
      "div.sportName.soccer > div.event__match",
      (res) => res.map((el) => el.getAttribute("id"))
    )

    const ids = []

    for (let i = 0; i < notSplittedIds.length; i++) {
      ids.push(notSplittedIds[i].toString().split("_")[2])
    }

    // Status or time
    // const start = await page.$$eval('div.event__check + div', (res) => res.map(el => el.textContent)); to variable datas

    const arr = []
    
    for (let i = 0; i < home.length; i++) {
      arr.push({
        id: i,
        // league: league,
        home: home[i],
        away: away[i],
        matchID: ids[i],
        homeLastMatches: [],
        awayLastMatches: [],
        homeStats: [],
        awayStats: [],
        h2h: [],
      })
    }
    this.matches = arr
    return arr
  }

async seasonScore(ID) {
  const browser = await launch()
  const page = await browser.newPage()

  await page.goto(this.URL_FS + "/match/" + ID + "/#standings")
  await page.waitForSelector(".rows___1vntYow > div")
  const countTeams = await page.$$eval(".rows___1vntYow > div", (div) => div.length)
  const arr = []

  if (countTeams > 1) {
    console.log(countTeams)
    for (let i = 1; i < countTeams; i++) {
      const [win] = await page.$x(
        `//*[@id="tournament-table"]/div[3]/div[1]/div/div/div[2]/div[${i}]/span[2]`
      )
      const [draw] = await page.$x(
        `//*[@id="tournament-table"]/div[3]/div[1]/div/div/div[2]/div[${i}]/span[3]`
      )
      const [lose] = await page.$x(
        `//*[@id="tournament-table"]/div[3]/div[1]/div/div/div[2]/div[${i}]/span[4]`
      )
      const [goals] = await page.$x(
        `//*[@id="tournament-table"]/div[3]/div[1]/div/div/div[2]/div[${i}]/span[5]`
      )
      const [points] = await page.$x(
        `//*[@id="tournament-table"]/div[3]/div[1]/div/div/div[2]/div[${i}]/span[6]`
      )

      console.log('wykonuje sie ten blok' + i + win)
    }
  }

  browser.close()
  // matches.push(arx)
}

  async winLose(ID) {
    const browser = await launch()
    const page = await browser.newPage()
    console.log(ID + 'from winlose')
    await page.goto(this.URL_FS + "/match/" + ID + "/#h2h;overall")

    for (let i = 0; i < 6; i++) {
      const [homeMatches] = await page.$x(`//*[@id="tab-h2h-overall"]/div[1]/table/tbody/tr[${i}]/td[6]/a`)
      const [homeScores] = await page.$x(`//*[@id="tab-h2h-overall"]/div[1]/table/tbody/tr[${i}]/td[5]/span/strong`)
      const [awayMatches] = await page.$x(`//*[@id="tab-h2h-overall"]/div[2]/table/tbody/tr[${i}]/td[6]/a`)
      const [awayScores] = await page.$x(`//*[@id="tab-h2h-overall"]/div[2]/table/tbody/tr[${i}]/td[5]/span/strong`)

      const [h2hHome] = await page.$x(`//*[@id="tab-h2h-overall"]/div[3]/table/tbody/tr[${i}]/td[3]/span`)
      const [h2hAway] = await page.$x(`//*[@id="tab-h2h-overall"]/div[3]/table/tbody/tr[${i}]/td[4]/span`)
      const [scores] = await page.$x(`//*[@id="tab-h2h-overall"]/div[3]/table/tbody/tr[${i}]/td[5]/span/strong`)

      if (!this.matches.includes('undefined')) {
        const homeLastMatches = await (await homeMatches.getProperty("title")).jsonValue()
        const homeLastScores = await (await homeScores.getProperty("textContent")).jsonValue()
        const awayLastMatches = await (await awayMatches.getProperty("title")).jsonValue()
        const awayLastScores = await (await awayScores.getProperty("textContent")).jsonValue()

        const h2hHomeText = await (await h2hHome.getProperty("textContent")).jsonValue()
        const h2hAwayText = await (await h2hAway.getProperty("textContent")).jsonValue()
        const score = await (await scores.getProperty("textContent")).jsonValue()

        for (const match of this.matches) {
          if (match.matchID == ID) {
            match.awayLastMatches.push([awayLastMatches, homeLastScores])
            match.homeLastMatches.push([homeLastMatches, awayLastScores])
            match.h2h.push({ h2hHomeText, h2hAwayText, score })
          }
        }
      }
    }
    browser.close()
  }



}