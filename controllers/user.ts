import { Request, Response } from 'express';
import User from '../models/user';

export const getUsers = async(req: Request, res: Response) => {

    const users = await User.findAll();
    res.json(users);

}

export const getUser = async(req: Request, res: Response) => {

    const { id } = req.params;
    const user = await User.findByPk(id);

    if (user){
        res.json(user)
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }

}

export const postUser = async(req: Request, res: Response) => {

    const { body } = req;
    try {

        const existEmail = await User.findOne({
            where: {
                email: body.email
            }
        })

        if (existEmail){
            return res.status(400).json({
                msg: `Ya existe un usuario con el email ${body.email}`
            })
        }

        const user = new User(body);
        await user.save()

        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

    console.log(body);
    
    res.json({
        body,
        msg: 'postUser'
    })

}

export const putUser = async(req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                msg: `No existe un usuario con el id ${id}`
            })
        }

        await user.update(body);

        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteUser = async(req: Request, res: Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    }

    // Logical Delete
    //await user.update({ state: false});

    // physical deletion
    await user.destroy();

    res.json(user);
}