class UserController {
  constructor() {
    this.users = [
      {
        name: "John",
        student: "coder",
      },
      {
        name: "David",
        student: "slacker",
      },
    ];
  }

  // There should be 4 different methods

  list = (req, res) => {
    console.log('UserRouter called, UserController List Method')
    res.json({ users: this.users, message: "success" });
  };

  listOne = (req, res) => {
    let user = this.users.filter((x) => x.name === req.params.name);
    //console.log(user);
    res.json({ message: "success", user: user });
  };

  add = (req, res) => {
    this.users.push({ name: req.body.name, student: req.body.student });
    res.json({ users: users, message: "success" });
  };

  listNames = (req, res) => {
    let names = this.users.map((user) => user.name);
    res.json({ data: names, message: "Success" });
  };
}
module.exports = UserController;
