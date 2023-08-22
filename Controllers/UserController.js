class UserController {
  constructor(studentModel, studentAddressesModel) {
    // this.users = [
    //   {
    //     name: "John",
    //     student: "coder",
    //   },
    //   {
    //     name: "David",
    //     student: "slacker",
    //   },
    // ];

    this.studentModel=studentModel
    this.studentAddressesModel=studentAddressesModel
  }

  // There should be 4 different methods

  list = async (req, res) => {
    console.log('UserRouter called')
    let data= await this.studentModel.findAll()
    console.log(data) 

    res.json({ users: data, message: "success" });
  };

  listOne = (req, res) => {
    let user = this.users.filter((x) => x.name === req.params.name);
    //console.log(user);
    res.json({ message: "success", user: user });
  };

  add = async (req, res) => {
    const user = req.body;
    console.log(user)
    let data = await this.studentModel.create({
      ...user
    })
    console.log(data);
    res.json({ users: data, message: "success" });
  };

  listNames = (req, res) => {
    let names = this.users.map((user) => user.name);
    res.json({ data: names, message: "Success" });
  };

  // Adding a where clause to specify the id. 
  delete = async (req,res) =>{
    console.log(req.params.id)
    await this.studentModel.destroy({
      where:{
        id:req.params.id,
      }
    })
    let data = await this.studentModel.findAll();
    console.log(data);

    res.json({ users: data, message: "success" });
  }
}
module.exports = UserController;


// // There should be 4 different methods

//   list = (req, res) => {
//     console.log('UserRouter called, UserController List Method')
//     res.json({ users: this.users, message: "success" });
//   };

//   listOne = (req, res) => {
//     let user = this.users.filter((x) => x.name === req.params.name);
//     //console.log(user);
//     res.json({ message: "success", user: user });
//   };

//   add = (req, res) => {
//     this.users.push({ name: req.body.name, student: req.body.student });
//     res.json({ users: users, message: "success" });
//   };

//   listNames = (req, res) => {
//     let names = this.users.map((user) => user.name);
//     res.json({ data: names, message: "Success" });
//   };