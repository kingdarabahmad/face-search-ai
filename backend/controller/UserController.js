import prisma from "../db/db.config.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //check user already exist or not
        const findUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (findUser) {
            return res.status(400).json({
                message: "This Email already exists"
            });
        }

        //create hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        //create new user
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword
            }
        });

        return res.status(200).json({
            message: "User registered successfully",
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            }
        });

    } catch (error) {
        console.log(error);
    }
}