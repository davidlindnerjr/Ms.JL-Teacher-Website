import bcrypt from 'bcryptjs';

const adminUsers = [
    {
        username: 'Admin One',
        password: bcrypt.hashSync('115261', 10),
        isAdmin: true
    },
    {
        username: 'Sarah Jacobs-Luttrell',
        password: bcrypt.hashSync('004150', 10),
        isAdmin: true
    },

]

export default adminUsers;