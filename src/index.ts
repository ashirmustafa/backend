import express, {Request, Response} from 'express';

const app = express();

app.get('/', (req: Request, res: Response): void =>{
    res.json({message: "Ashir was here"});
})

app.listen('3001', (): void =>{
    console.log('server running!!');
    
})