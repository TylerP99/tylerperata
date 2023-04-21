const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require
    },
    email: {
        type: String,
        require
    },
    password: {
        type: String,
        require
    },
    roles: {
        type: Array,
        default: ["user"],
    },
}, {timestamps: true});

UserSchema.pre("save", async function save(next) {
    const user = this;

    if(!user.isModified("password")) return next();

    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        next();
    }
    catch(e) {
        console.error(e);
        next(e);
    }
});

UserSchema.methods.comparePassword = async function comparePassword(password) {
    const result = await bcrypt.compare(password, this.password);
    return result;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;