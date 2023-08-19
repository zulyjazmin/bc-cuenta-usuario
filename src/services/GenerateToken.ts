import { Token, UserBase } from "../interfaces/dto-data-transfer-object";



const GenerateToken = (user: UserBase): Token => {
    const now = new Date();

    now.setSeconds(
        now.getSeconds() + 10
    );
    return {
        expiresOn: now,
        token: '3',
        userId: user.id
    };
}

export default GenerateToken;