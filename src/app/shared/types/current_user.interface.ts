export interface ICurrentUser {
    _id: string;
    fullName: string;
    email: string;
    passwordHash: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
    token: string;
}
