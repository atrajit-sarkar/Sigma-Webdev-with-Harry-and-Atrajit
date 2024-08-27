import express from "express"
import fs from "fs/promises"

const app = express()
const port = 3000
const Pages={
    "home":"home.html",
    "contact":"contact.html"
}

async function readPages(pagename) {
    let a=await fs.readFile(pagename)
    return a.toString()
    
}

app.use(express.static('public'))

app.get('/:slug', async (req, res) => {
    const slug=req.params.slug
    const pagecontent= await readPages(Pages[slug])
    res.end(pagecontent)
    // console.log(req.params.slug);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})