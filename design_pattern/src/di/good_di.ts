export {};

class User {}

/// 利用する側と利用される側が、抽象のインターフェイスに依存していることになる
/// これにより、依存関係の逆転が実現された

interface IUserService {
  create(user: User): User;
  findById(id: string): User;
}

class UserController {
  constructor(private userService: IUserService) {
    this.userService = userService;
  }

  create(user: User): User {
    return this.userService.create(user);
  }

  findById(id: string): User {
    return this.userService.findById(id);
  }
}

interface IUserRepository {
  create(user: User): User;
  findById(id: string): User;
}

class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  create(user: User): User {
    return this.userRepository.create(user);
  }

  findById(id: string): User {
    return this.userRepository.findById(id);
  }
}

class UserRepository implements IUserRepository {
  create(user: User): User {
    console.log("RDBにデータを保存しました");
    return user;
  }

  findById(id: string): User {
    console.log(`RDBから ID: ${id} のデータを取得しました`);
    return new User();
  }
}

class TestRepository implements IUserRepository {
  create(user: User): User {
    console.log("Test DB にデータを保存しました");
    return user;
  }

  findById(id: string): User {
    console.log(`TestID: ${id} のデータを取得しました`);
    return new User();
  }
}

/// 外部からオブジェクトを渡すことで、拡張性を高めることができる
/// これにより、コードの再利用性が向上した

function run() {
  // const repository = new UserRepository();
  const repository = new TestRepository();
  const service = new UserService(repository);
  const controller = new UserController(service);
  controller.findById("123");
}

run();
