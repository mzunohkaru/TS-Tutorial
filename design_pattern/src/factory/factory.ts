export {};

abstract class CreditCard {
  constructor(protected owner: string) {}

  getOwner(): string {
    return this.owner;
  }

  abstract getCardType(): string;
  abstract getAnnualCharge(): number;
}

class Platinum extends CreditCard {
  getCardType(): string {
    return "Platinum";
  }

  getAnnualCharge(): number {
    return 3500;
  }
}

class Gold extends CreditCard {
  getCardType(): string {
    return "Gold";
  }

  getAnnualCharge(): number {
    return 2000;
  }
}

abstract class CreditCardFactory {
  abstract createCreditCard(owner: string): CreditCard;
  abstract registerCreditCard(card: CreditCard): void;

  create(owner: string): CreditCard {
    const card = this.createCreditCard(owner);
    this.registerCreditCard(card);
    return card;
  }
}

const creditCardDatabase: CreditCard[] = [];

class PlatinumCreditCardFactory extends CreditCardFactory {
  createCreditCard(owner: string): CreditCard {
    return new Platinum(owner);
  }

  registerCreditCard(card: CreditCard): void {
    creditCardDatabase.push(card);
  }
}

class GoldCreditCardFactory extends CreditCardFactory {
  createCreditCard(owner: string): CreditCard {
    return new Gold(owner);
  }

  registerCreditCard(card: CreditCard): void {
    creditCardDatabase.push(card);
  }
}

function run() {
  const platinumFactory = new PlatinumCreditCardFactory();
  const goldFactory = new GoldCreditCardFactory();

  const platinum = platinumFactory.create("John");
  const gold = goldFactory.create("Doe");

  console.log(platinum);
  console.log(gold);
  console.log(gold.getCardType());
  console.log(gold.getAnnualCharge());

  console.log(creditCardDatabase);
}

run();
