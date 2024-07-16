export {};

class User {}

class UserController {
  private userService = new UserService();

  create(user: User): User {
    return this.userService.create(user);
  }

  findById(id: string): User {
    return this.userService.findById(id);
  }
}

class UserService {
  private userRepository = new UserRepository();

  create(user: User): User {
    return this.userRepository.create(user);
  }

  findById(id: string): User {
    return this.userRepository.findById(id);
  }
}

class UserRepository {
  create(user: User): User {
    console.log("RDBにデータを保存しました");
    return user;
  }

  findById(id: string): User {
    console.log(`RDBから ID: ${id} のデータを取得しました`);
    return new User();
  }
}

function run() {
  const userController = new UserController();
  userController.findById("1");
}

run();
