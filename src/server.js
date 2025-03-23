// server.js
import express from 'express'
import axios from 'axios'
import { Configuration, OpenAIApi } from 'openai'

const app = express()
app.use(express.json())
const OPENAI_API_URL = process.env.REACT_APP_OPENAPI_ENDPOINT
const API_KEY = process.env.REACT_APP_OPENAPI_SECRET
const configuration = new Configuration({
  organization: process.env.REACT_APP_OPENAPI_ORG,
  apiKey: process.env.REACT_APP_OPENAPI_SECRET,
})
const openai = new OpenAIApi(configuration)

app.post('/api/chatbot', async (req, res) => {
  const prompt = req.body.prompt
  try {
    openai
      .createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      })
      .then((response) => {
        console.log(result)
      })
  } catch (error) {
    res.status(500).send(error.toString())
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
