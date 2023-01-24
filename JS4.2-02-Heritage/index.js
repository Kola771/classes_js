
class User {
    fullName(name, firstName){
        this.name = name;
        this.firstName = firstName;
        return (this.name.concat(" "+this.firstName));
    }
}

export default User;