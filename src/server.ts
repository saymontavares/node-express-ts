import express, { Request, Response } from 'express'
const port = process.env.PORT || 3000
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World!' })
})

app.listen(port, () => console.log(`Server on port: ${port}`))