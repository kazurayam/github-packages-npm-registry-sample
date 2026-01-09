import { User } from 'shared';

const now = new Date();
const user: User = {
    id: "id",
    name: "John Doe",
    createdAt: now,
    updatedAt: now
}
console.log(user);
