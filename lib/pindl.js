import axios from "axios"
import cheerio from "cheerio"

async function pindl(url) {
  try {
    const { data } = await axios.get(`https://www.savepin.app/download.php?url=${url}&lang=en&type=redirect`)
    const $ = cheerio.load(data)
    if ($(".download-link > div:nth-child(2) > div > table > tbody >  tr:nth-child(1) > td:nth-child(3) > a").attr("href").includes("force-save.php")) {
      var urll = decodeURIComponent($(".download-link > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > a").attr("href").split("url=")[1])
    } else {
      var urll = $(".download-link > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > a").attr("href")
    }
    const result = {
      status: true,
      url: urll
    }
    console.log(result)
    return result
  } catch (err) {
    result = {
      status: false,
      msg: "Error: Invalid URL!"
    }
    console.log(result)
    return result
  }
}
export { pindl }

//module.exports = { Getongoing, Getdownload, Getdetail, Getsearch }