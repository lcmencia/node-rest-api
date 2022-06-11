import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {

    res.json({
        msg: 'getUsers'
    })

}

export const getUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'getUser',
        id
    })

}

export const postUser = (req: Request, res: Response) => {

    const { body } = req;

    console.log(body);
    
    res.json({
        body,
        msg: 'postUser'
    })

}

export const putUser = (req: Request, res: Response) => {

    const { id } = req.params;
    
    res.json({
        msg: 'putUser',
        id
    })

}

export const deleteUser = (req: Request, res: Response) => {

    const { id } = req.params;
    
    res.json({
        msg: 'deleteUser',
        id
    })

}