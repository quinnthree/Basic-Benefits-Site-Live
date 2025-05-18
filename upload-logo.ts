import { put } from "@vercel/blob"
import fs from "fs/promises"

export default async function uploadLogo() {
  try {
    const file = await fs.readFile("./BasicBenefits_Logo.svg")
    const { url } = await put("BasicBenefits_Logo.svg", file, { access: "public" })
    console.log("Logo uploaded successfully. URL:", url)
    return url
  } catch (error) {
    console.error("Error uploading logo:", error)
  }
}

uploadLogo()
