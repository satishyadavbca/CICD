import express from 'express';
const app = express();
app.use(express.json());
app.get('/health', (_, res) => res.status(200).json({status:'UP'}));
export default app;